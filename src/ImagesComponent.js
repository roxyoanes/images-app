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
 
  return(
    <div>
    <h3>Requested topic ID: {id}</h3>
      <p>images</p>
      <Link to="/">Back</Link>
      <input type="url" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <button onClick={handleClick}>Add</button>
      {listFolders.map((folder) => ( folder.id === id ? 
        (<div key={id}>
          {folder.images.map((image) => (
            <div key={image} className="image-container">
            <img className="image" src={image} alt="text" />
            </div>
          ))} 
        </div> ) : null
      ))}
    </div>
  )
}

export default ImagesComponent;