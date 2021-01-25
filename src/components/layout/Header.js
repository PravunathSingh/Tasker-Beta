import React from 'react'

const Header = ({onAdd, showAdd}) => {
    return (
        <div>
            <button className={`btn ${showAdd ? 'btn-danger' : 'btn-success'} btn-block btn-lg float-right mb-4`} onClick={onAdd}>{showAdd ? 'Close' : 'Add Task'}</button>
        </div>
    )
}

export default Header
