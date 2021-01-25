import React, {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className="card p-3 mb-5 shadow">
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
                <input type="checkbox" className="ml-5" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-primary btn-block"/>
        </form>
    )
}

export default AddTask
