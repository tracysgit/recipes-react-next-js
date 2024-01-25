'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './ImagePicker.module.css';

export default function ImagePicker({ label, name, compclasses }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  
  function handlePickClick() {
    imageInput.current.click();
  };

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={`${classes.picker} ${compclasses}`}>
      <label htmlFor={name}>{label}</label>
      <p className={classes.note}>(The file size should be less than 200KB.)</p>
      <div className={`${classes.controls} mt-1`}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="" fill />
          )}
        </div>
        <input 
          type="file" 
          id={name} 
          name={name} 
          accept="image/jpeg, image/webp" 
          className={classes.input} 
          ref={imageInput} 
          onChange={handleImageChange} 
          // required
        />
        <button className="inline-flex items-center px-4 py-2 text-lg text-center rounded-lg bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-800" id="imagepick1" type="button" onClick={handlePickClick}>Pick an Image</button>
      </div>
    </div>
  )
}
