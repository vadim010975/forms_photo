import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import SelectionWindow from "./SelectionWindow";
import ListPreviews from "./ListPreviews";

const PhotoManager = () => {

  const [images, setImages] = useState([]);

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    addImages(urls);
    const dt = new DataTransfer();
    const fileList = dt.files;
    evt.target.files = fileList;
  }

  const addImages = (imgs) => {
    const arr = [...images];
    imgs.forEach(el => arr.push({id: uuidv4(), img: el}));
    setImages(arr);
  }

  const onClick = (img) => {
    const arr = images.filter(el => el.id != img.id);
    setImages(arr);
  }

  return (
    <div className="container">
      <SelectionWindow onChange={handleSelect} />
      <ListPreviews images={images} onClick={onClick} />
    </div>
  )
}

export default PhotoManager;