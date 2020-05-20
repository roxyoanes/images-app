import React from "react";
import {
  Link,
  useParams
} from "react-router-dom";

const ImagesComponent = ({imagesInput, handleImageInput, listFolders, setListFolders, setImagesInput}) => {

  let { id } = useParams();

  const filterImages = (id) => {
    const newArray = listFolders.map((folder) => folder.id === id ? {...folder, images: [...folder.images, imagesInput]} : folder);
    setListFolders(newArray);
    setImagesInput("");
  }

  const handleClick = (folder) => {
    if(imagesInput){
      filterImages(id)
    } else{
      return <p>error</p>
    }
  }

  const deleteImages = (image) => {
    const filteredFolder = 
      listFolders.find((folder) => folder.id === id);
    const filteredImages = 
      filteredFolder.images.filter((el) => el !== image) 
    const newArray = 
      listFolders
      .map((folder) => folder.id === id ? {...folder, images: filteredImages } : folder);
    setListFolders(newArray);
    console.log(newArray);
  };
 
  return(
    <div>
      <p>Images</p>
      <Link to="/"><button className="btn">Back</button></Link>
      <input type="url" className="input-field" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <button className="btn" onClick={handleClick}>Add</button>
      {listFolders.map((folder) => ( folder.id === id ? 
        (<div key={id}>
          {folder.images.map((image) => (
            <div key={image} className="image-container">
            <img className="image" src={image} alt="text" />
            <button className="btn" onClick={() => deleteImages(image)}>Delete</button>
            </div>
          ))} 
        </div> ) : null
      ))}
    </div>
  )
}

export default ImagesComponent;