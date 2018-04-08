import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">UsersApp</Link>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">User List</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add">Add</Link>
                            </li>
                        </ul>>
                    </div>
                </div>
            </nav>
        );
    };
};
