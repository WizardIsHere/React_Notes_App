import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateNote = ({ modal, toggle, updateNote, noteObj }) => {

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

    useEffect(() => {
        setNoteName(noteObj.Name)
        setNoteDescription(noteObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = noteName
        tempObj['Description'] = noteDescription
        updateNote(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Note</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={noteName} onChange={changeHandler} name="noteName" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={noteDescription} onChange={changeHandler} name="noteDescription"></textarea>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle} >Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default UpdateNote;