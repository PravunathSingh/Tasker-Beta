import React from 'react';
import {FaTrash} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`card mb-4 shadow-sm task ${task.reminder ? 'reminder' : ''} px-3 py-2`} onDoubleClick={() => onToggle(task.id)}>
            <h4 className="card-title">{task.text} <FaTrash className="float-right text-danger" onClick={() => onDelete(task.id)}/></h4>
            <p className="card-text">{task.day}</p>
        </div>
    )
}

export default Task
