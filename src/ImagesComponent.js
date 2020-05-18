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

  const deleteImages = (id) => {
    const newArray = listFolders.filter((folder) => folder.id !== id);
    setListFolders(newArray);
  };
 
  return(
    <div>
      <p>Images</p>
      <Link to="/"><button className="btn">Back</button></Link>
      <input type="url" className="input-field" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <button className="btn" onClick={handleClick}>Add</button>
      {listFolders.map((folder) => ( folder.id === id ? 
        (<div key={id} className="container">
          {folder.images.map((image) => (
            <div key={image} className="image-container">
            <img className="image" src={image} alt="text" />
            <button className="btn" onClick={() => deleteImages(id)}>Delete</button>
            </div>
          ))} 
        </div> ) : null
      ))}
    </div>
  )
}

export default ImagesComponent;