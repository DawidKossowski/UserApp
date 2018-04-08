import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { fetchUsers, editUser } from '../actions/actions';
//import {User} from "./model/User";

class UserEdit extends React.PureComponent {

    state = {
        ...this.props.user,
    };

    componentWillMount() {
        if(!this.props.user) {
            this.props.fetchUsers();
        }
    }

    render() {
        return (
            <div className="mt-4">
                <h1 className="mb-4">Edit user with id {this.state.id}:</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="form-group row">
                        <label htmlFor="usernameInput" className="col-2 col-form-label">Full name</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="usernameInput"
                                   value={this.state.name}
                                   onChange={(name) => this.setState({name: name.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fullnameInput" className="col-2 col-form-label">Username</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="fullnameInput"
                                   value={this.state.username}
                                   onChange={(username) => this.setState({username: username.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="emailInput" className="col-2 col-form-label">Email</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="emailInput"
                                   value={this.state.email}
                                   onChange={(email) => this.setState({email: email.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="streetInput" className="col-2 col-form-label">Street</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="streetInput"
                                   value={this.state.address.street}
                                   onChange={(street) => this.setState({address: {street: street.target.value}})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="suiteInput" className="col-2 col-form-label">Suite</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="suiteInput"
                                   value={this.state.address.suite}
                                   onChange={(suite) => this.setState({address: {suite: suite.target.value}})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cityInput" className="col-2 col-form-label">City</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="cityInput"
                                   value={this.state.address.city}
                                   onChange={(city) => this.setState({address: {city: city.target.value}})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="zipcodeInput" className="col-2 col-form-label">Zip code</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="zipcodeInput"
                                   value={this.state.address.zipcode}
                                   onChange={(zipcode) => this.setState({address: {zipcode: zipcode.target.value}})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phoneInput" className="col-2 col-form-label">Phone</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="phoneInput"
                                   value={this.state.phone}
                                   onChange={(phone) => this.setState({phone: phone.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    onSubmitForm(event) {
        event.preventDefault();
        //let { id, fullName, username, email, street, suite, city, zipcode, phone } = this.state;
        //let changedUser = new User(id, fullName, username, email, street, suite, city, zipcode, phone );
        this.props.editUser(this.state);
        this.props.history.push('/');
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === Number(ownProps.match.params.id)),
});

const actions = {
    fetchUsers,
    editUser,
};

export default withRouter(connect(mapStateToProps, actions)(UserEdit));
