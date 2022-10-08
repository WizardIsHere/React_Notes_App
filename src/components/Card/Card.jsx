import React,{useState} from 'react'
import Moment from 'react-moment';
import UpdateNote from '../Modal/UpdateNote'

const Card = ({noteObj, index, deleteNote, updateNoteArray}) => {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#9cec86",
            secondaryColor : "#dff8d5"
        },
        {
            primaryColor : "#2cd8a8",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#9fadbd",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#7070bb",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#3ac08f",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateNote = (obj) => {
        updateNoteArray(obj, index)
    }

    const handleDelete = () => {
        deleteNote(index)
    }
    const date = new Date();
    return (
            <div className="card-wrapper mr-5" style={{ "backgroundColor": colors[index % 5].primaryColor }}>
                <div className="task-holder">
                    <div className='d-flex justify-content-between'>
                            <span className="card-header" style={{ "backgroundColor": colors[index % 5].secondaryColor}}>{noteObj.Name}</span>
                            <div className='mt-2'  >
                            <i className="far fa-edit mx-3" style={{ "color": colors[index % 5].secondaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                             <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].secondaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                            </div>
                    </div>
                    <p className="mt-3">{noteObj.Description}</p>
                    
                    <div className='d-flex' style={{ "position": "absolute", "right": "20px", "bottom": "20px", "gap": '4rem' }}>
                        <Moment format='DD MMM YY, h:mm:ss a' id="dnt" >{date}</Moment>
                    </div>
                </div>
                <UpdateNote modal={modal} toggle={toggle} updateNote={updateNote} noteObj={noteObj} />
            </div>
        
    )
}

export default Card
