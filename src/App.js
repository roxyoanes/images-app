import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";

import "./App.css";
import ImagesComponent from "./ImagesComponent";
import EditModal from "./EditModal";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [listFolders, setListFolders] = React.useState([]);
  const [folderTitleInput, setFolderTitleInput] = React.useState("");
  const [imagesInput, setImagesInput] = React.useState("");
  const [editInputTitle, setEditInputTitle] = React.useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTitleInput = (e) => {
    setFolderTitleInput(e.target.value);
  };

  const handleImageInput = (f) => {
    setImagesInput(f.target.value);
  };

  const handleEditInput = (g) => {
    setEditInputTitle(g.target.value);
  };

  const addFolder = (e) => {
    if (e.keyCode === 13) {
      const folder = {
        id: uuidv4(),
        text: e.target.value,
        images: [],
      };
      setListFolders([...listFolders, folder]);
      setFolderTitleInput("")
    }
  };

  const deleteFolder = (id) => {
    const newArray = listFolders.filter((folder) => folder.id !== id);
    setListFolders(newArray);
  };

  const editFolderName = (input) => {
    const newArray = listFolders.map((element) =>
      element.id === input.id ? input : element
    );
    setListFolders(newArray);
    setIsOpen(!modalIsOpen);
    setEditInputTitle("");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleEditModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <p>Folders</p>
          <button className="btn" onClick={handleToggle}>Add folder</button>
          {toggle ? (
            <div>
              <input
                type="text"
                className="input-field"
                value={folderTitleInput}
                onKeyDown={addFolder}
                onChange={handleTitleInput}
              />
              <div>
                {listFolders.map((folder) => (
                  <div className="folder-container" key={folder.id}>
                    <p className="list-item" key={folder.id}>
                      {folder.text}
                    </p>
                    <button className="btn" onClick={() => toggleEditModal(folder.id)}>
                      edit
                    </button>
                    <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                      <EditModal
                        closeModal={closeModal}
                        handleEditInput={handleEditInput}
                        editInputTitle={editInputTitle}
                        editFolderName={editFolderName}
                        folder={folder}
                      />
                    </Modal>
                    <button className="btn" onClick={() => deleteFolder(folder.id)}>
                      delete
                    </button>
                    <Link to={`/images/${folder.id}`}><button className="btn">enter</button></Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </Route>
        <Route path="/images/:id">
        <ImagesComponent
            imagesInput={imagesInput}
            handleImageInput={handleImageInput}
            listFolders={listFolders}
            setListFolders={setListFolders}
            setImagesInput={setImagesInput}
          />
        </Route>
          
      </Switch>
    </div>
  );
};

export default App;
