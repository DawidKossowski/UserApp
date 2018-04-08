import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchUsers, deleteUser} from '../actions/actions';

class Users extends React.PureComponent {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.fetchUsers();
        }
    }

    render() {
        return (
            <div>
                <h1 className="mt-3">List of users</h1>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr onClick={() => this.router}>
                        <th scope="col">Full name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(user => {
                        const {street, suite, city, zipcode} = user.address;

                        return (
                            <tr key={user.id}>
                                <td><Link to={`/edit/${user.id}`}>{user.name}</Link></td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className="d-block">{street} {suite}</span>
                                    <span>{city} {zipcode}</span>
                                </td>
                                <td>{user.phone}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.onUserDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

    onUserDelete = (userId) => {
        this.props.deleteUser(userId);
    }
}

const mapStateToProps = (state, ownProps) => ({
    users: state.users,
});

const actions = {
    fetchUsers,
    deleteUser,
};

export default connect(mapStateToProps, actions)(Users);
