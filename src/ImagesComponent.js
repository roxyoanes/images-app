import React from "react";
import {Link} from "react-router-dom";


const ImagesComponent = ({imagesInput, handleImageInput}) => {
  
  return(
    <div>
      <p>images</p>
      <Link to="/">Back</Link>
      <input type="url" onChange={handleImageInput} value={imagesInput} placeholder="Insert image URL here" />
      <img src="" alt="img" />
    </div>
  )
}

export default ImagesComponent;