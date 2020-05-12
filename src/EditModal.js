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
    <div>
      <input type="text" value={editInputTitle} onChange={handleEditInput} />
      <button onClick={closeModal}>close</button>
      <button onClick={handleClick}>save</button>
    </div>
  )
}

export default EditModal;