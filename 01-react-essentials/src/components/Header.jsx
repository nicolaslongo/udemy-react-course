import reactImg from '../assets/react-core-concepts.png'
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function generateRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export default function Header() {
  let variableDescription = reactDescriptions[generateRandomInt(reactDescriptions.length)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {variableDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}