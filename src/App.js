import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import ImagesComponent from "./ImagesComponent";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [listFolders, setListFolders] = React.useState([]);
  const [folderTitleInput, setFolderTitleInput] = React.useState("");
  const [imagesInput, setImagesInput] = React.useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTitleInput = (e) => {
    setFolderTitleInput(e.target.value);
  };

  const handleImageInput = (e) => {
    setImagesInput(e.target.value);
  };

  const addFolder = (e) => {
    if (e.keyCode === 13) {
      const folder = {
        id: uuidv4(),
        text: e.target.value,
        images: e.target.value,
      };
      setListFolders([...listFolders, folder]);
    }
  };

  const deleteFolder = (id) => {
    const newArray= listFolders.filter((folder) => folder.id !== id)
    setListFolders(newArray);
  }

  return (
    <div className="App">
      <p>Folders</p>
      <button onClick={handleToggle}>Add folder</button>
      {toggle ? (
        <div>
          <input type="text" value={folderTitleInput} onKeyDown={addFolder} onChange={handleTitleInput} />
          <div>
            {listFolders.map((folder) => (
              <div>
                <p className="list-item" key={folder.id}>
                  {folder.text}
                </p>
                <button>edit</button>
                <button onClick={() => deleteFolder(folder.id)}>delete</button>
                <button>enter</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
