"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({label, name}) {
  const imageInput = useRef();
  const [selectedImage, setSelectedImage] = useState();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setSelectedImage(null);
      return
    }
    if (selectedImage) {
      setSelectedImage(null);
    }

    // getting the image as a dataUrl  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result)
    };
    fileReader.readAsDataURL(file);
  } 

  return <div className={classes.picker}>
    <label htmlFor="image">{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!selectedImage && <p>No image was selected yet</p>}
        {selectedImage && 
          <Image src={selectedImage} alt="Image selected by the user." fill/>}
      </div>
      <input 
        className={classes.input}
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
      />
      <button className={classes.buton} type="button" onClick={handlePickClick}>
        Pick an image
      </button>
    </div>
  </div>
}