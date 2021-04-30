import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1 m-auto" href="/">Hugo's VideoPlayer</a>
            </div>
        </nav>
    );
}

export default Navbar;