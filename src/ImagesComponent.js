import React from "react";
import {
  Link,
  useParams
} from "react-router-dom";


const ImagesComponent = ({imagesInput, handleImageInput, listFolders, setListFolders}) => {

  const filterImages = (input) => {
    const newArray = listFolders.map((folder) => folder.id === input.id ? {...folder, images: [...folder.images, imagesInput]} : []);
    setListFolders(newArray);
    console.log(newArray);
  }

  const handleClick = (folder) => {
    if(imagesInput){
      filterImages({ id: id, ...folder.images, images: imagesInput})
    } else{
      return <p>error</p>
    }
  }
 
  let { id } = useParams();
  return(
    <div>
    <h3>Requested topic ID: {id}</h3>
      <p>images</p>
      <Link to="/">Back</Link>
      <input type="url" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <button onClick={handleClick}>Add</button>
      {listFolders.map((folder) => (
        <div key={folder.id}>
          {folder.images.map((image) => (
            <div className="image-container">
            <img className="image" src={image} alt="text" />
            </div>
          ))} 
        </div>
      ))}
    </div>
  )
}

export default ImagesComponent;