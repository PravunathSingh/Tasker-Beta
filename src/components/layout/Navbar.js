import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-light shadow mb-4 p-2">
            <div className="container">
                <a href="/" className="navbar-brand"><h2 className="text-dark">Tasker <i className="fa fa-clipboard 2x"></i></h2></a>
                <h5 className="text-info">Manage Tasks With Ease</h5>
            </div>
        </nav>       
    )
}

export default Navbar
