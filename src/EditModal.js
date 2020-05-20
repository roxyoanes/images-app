import React from "react";


const EditModal = ({closeModal, handleEditInput, editInputTitle, editFolderName, folder}) => {

  const handleClick = () => {
    if(editInputTitle){
      editFolderName({ ...folder, text: editInputTitle})
    } else{
      return <p>error</p>
    }
  }
  return(
    <div className="edit-container">
      <input className="input-field" type="text" value={editInputTitle} onChange={handleEditInput} />
      <button className="btn" onClick={closeModal}>close</button>
      <button className="btn" onClick={handleClick}>save</button>
    </div>
  )
}

export default EditModal;