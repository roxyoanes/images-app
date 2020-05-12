import React from "react";
import {
  Link,
  useParams
} from "react-router-dom";


const ImagesComponent = ({imagesInput, handleImageInput}) => {

  let { id } = useParams();
  return(
    <div>
    <h3>Requested topic ID: {id}</h3>
      <p>images</p>
      <Link to="/">Back</Link>
      <input type="url" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <img src={imagesInput} alt="img" />
    </div>
  )
}

export default ImagesComponent;