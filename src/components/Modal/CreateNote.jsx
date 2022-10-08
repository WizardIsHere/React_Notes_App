import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const CreateNote = ({ modal, toggle, save }) => {

  const [noteName, setNoteName] = useState('')
  const [noteDescription, setNoteDescription] = useState('')

  const changeHandler = (e) => {
    const { name, value } = e.target

    if (name === 'noteName') {
      setNoteName(value)
    }
    else {
      setNoteDescription(value)
    }
    console.log(noteName,noteDescription)
  }
  const handleSave = () => {
    let noteObj = {}
    noteObj["Name"] = noteName
    noteObj["Description"] = noteDescription
    save(noteObj)
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Note</ModalHeader>
      <ModalBody>
        <form>
          <div className='form-group'>
            <label>Title</label>
            <input type="text" className='form-control' name='noteName' value={noteName} onChange={changeHandler}></input>
          </div>
          <div className='form-group mt-2'>
            <label>Note</label>
            <textarea rows="5" className='form-control' name="noteDescription" value={noteDescription} onChange={changeHandler}></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button style={{ backgroundColor: "#0068a5"}} onClick={handleSave}>Add</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateNote;