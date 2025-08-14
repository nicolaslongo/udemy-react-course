import { useEffect, useRef, useState, useCallback } from 'react';

import logoImg from './assets/logo.png';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import Modal from './components/Modal.jsx';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from "./loc.js";


const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) => 
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  // The effect function will be executed by React only AFTER every component execution.
  // If you define some dependencies, it will only re-run effect function when they value change!
  // If you define dependencies as an empty array, effect function won't be re-executed
  // If you ommit the dependencies param, it will re-run effect functino after every component re-execution
  // Use effect should only be used when we want to:
  // - avoid infinite loops (such as this case)
  // - need to run code after the component is rendered. 
  useEffect(
    // effect function
    () => {
      // Side effect code: get the users geolocation and use it to sort places
      // `navigator` is a website built-in function. Given the nature of the function, 
      // if we ran this in the root of the App() function it would re-execute in an infinite loop.
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('got geolocation: ', position)
        const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
      });
    },
    // array of dependencies of the effect function
    [],
  );

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  };

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  };

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // This code is also a side effect! But... we don't need to wrap this with useEffect
    // because this is not getting re-executed in an infinite loop.
    // (we also can't because useEffect only works at the root code of the component!)
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === - 1) {
      // `localStorage` is a website built-in function
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedIds]));
    }
  };

  const handleRemovePlace  = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem("selectedPlaces", JSON.stringify(storedIds.filter((id)=> id !== selectedPlace.current)));
  }, []);


  return (
    <>
      <Modal ref={modal} open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting places by distance..."}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
