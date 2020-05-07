import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import Modal from 'react-modal';


import "./App.css";
import ImagesComponent from "./ImagesComponent";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [listFolders, setListFolders] = React.useState([]);
  const [folderTitleInput, setFolderTitleInput] = React.useState("");
  const [imagesInput, setImagesInput] = React.useState("");
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const history = useHistory()


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
    const newArray = listFolders.filter((folder) => folder.id !== id);
    setListFolders(newArray);
  };

  const editFolderName = (folder) => {
    const newArray = listFolders.map((item) =>
      item.id === folder.id ? folder : item
    );
    setListFolders(newArray);
    setIsOpen(!modalIsOpen);
  };

  function closeModal(){
    setIsOpen(false);
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <p>Folders</p>
          <button onClick={handleToggle}>Add folder</button>
          {toggle ? (
            <div>
              <input
                type="text"
                value={folderTitleInput}
                onKeyDown={addFolder}
                onChange={handleTitleInput}
              />
              <div>
                {listFolders.map((folder, id) => (
                  <div key={id}>
                    <p className="list-item" key={folder.id}>
                      {folder.text}
                    </p>
                    <button onClick={() => editFolderName(folder.id)}>
                      edit
                    </button>
                    <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                      <input />
                      <button onClick={closeModal}>close</button>
                      <button>save</button>
                    </Modal>
                    <button onClick={() => deleteFolder(folder.id)}>
                      delete
                    </button>
                    <button onClick={() => history.push("/images", { folder })}>enter</button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </Route>
        <Route path="/images">
          <ImagesComponent />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
