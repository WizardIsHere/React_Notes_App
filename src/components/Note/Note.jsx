import React, { useState, useEffect } from 'react'

import CreateNote from '../Modal/CreateNote';
import Card from '../Card/Card';
import styles from './Note.module.css'

const Note = (search) => {
    const [modal, setModal] = useState(false);
    const [noteList, setNoteList] = useState([]);

    // To fetch all saved notes from localStorage.
    useEffect(() => {
        let arr = localStorage.getItem("noteList")

        if (arr) {
            let obj = JSON.parse(arr)
            setNoteList(obj)
        }
    }, [])

    // For Modal Toggle
    const toggle = () => {
        setModal(!modal)
    }

    const saveNote = (noteObj) => {
        let tempList = noteList
        tempList.push(noteObj)
        localStorage.setItem("noteList", JSON.stringify(tempList))
        setNoteList(noteList)
        setModal(false)
    }

    const deleteNote = (index) => {
        let tempList = noteList
        tempList.splice(index, 1)
        localStorage.setItem("noteList", JSON.stringify(tempList))
        setNoteList(tempList)
        window.location.reload()
    }

    const updateNoteArray = (obj, index) => {
        let tempList = noteList
        tempList[index] = obj
        localStorage.setItem("noteList", JSON.stringify(tempList))
        setNoteList(tempList)
        window.location.reload()
    }

    const searchValue = search.search;

    return (
        <div className={styles.Note}>
            {/* ActionButton goes here */}
            <div className={styles.ActionButton}>
                <i className="gg-file-add" style={{ color: 'white' }} onClick={() => setModal(true)}></i>
                <CreateNote modal={modal} toggle={toggle} save={saveNote} />
            </div>
            {/* Note */}
            <div className='task-container'>
            {/* Outputs Card after applying filter */}
            {
                noteList.filter((obj) => obj.Name.toLowerCase().includes(searchValue))
                .map((item,index) => <Card 
                        noteObj={item} 
                        index={index} 
                        deleteNote={deleteNote}
                        updateNoteArray={updateNoteArray}
                        />
                    )
            }   
            </div>
        </div>
    )
}

export default Note