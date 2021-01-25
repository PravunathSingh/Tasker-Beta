import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please Add Task')
            return
        }

        onAdd({text, day, reminder}) 
        
        setText('')
        setDay('')
        setReminder(false)
        
    }

    return (
        <form className="card p-3 mb-5 shadow" onSubmit={onSubmit}>
            <div className="form-group">
                <label><h6>Task</h6></label>
                <input type="text" className="form-control" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <label><h6>Day & Time</h6></label>
                <input type="text" className="form-control" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-group">
                <label><h6>Add Reminder</h6></label>
                <input type="checkbox" className="ml-5" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-primary btn-block"/>
        </form>
    )
}

export default AddTask
