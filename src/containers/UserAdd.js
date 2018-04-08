import React from 'react';
import {connect} from 'react-redux';

import {User} from './model/User';
import {addUser} from '../actions/actions';


class UserAdd extends React.PureComponent {
    state = {
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        phone: ''
    };


    render() {
        return (
            <div className="mt-4">
                <h1 className="mb-4">Add new user:</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="form-group row">
                        <label htmlFor="nameInput" className="col-2 col-form-label">Full name</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="nameInput"
                                value={this.state.name}
                                onChange={(name) => this.setState({name: name.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="usernameeInput" className="col-2 col-form-label">Username</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="usernameInput"
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
                               value={this.state.street}
                               onChange={(street) => this.setState({street: street.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="suiteInput" className="col-2 col-form-label">Suite</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="suiteInput"
                               value={this.state.suite}
                               onChange={(suite) => this.setState({suite: suite.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cityInput" className="col-2 col-form-label">City</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="cityInput"
                               value={this.state.city}
                               onChange={(city) => this.setState({city: city.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="zipcodeInput" className="col-2 col-form-label">Zip code</label>
                        <div className="col-10">
                            <input className="form-control" type="text" id="zipcodeInput"
                               value={this.state.zipcode}
                               onChange={(zipcode) => this.setState({zipcode: zipcode.target.value})}/>
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
        );
    }

    onSubmitForm(event) {
        event.preventDefault();
        let id = this.props.lastId + 1;
        let { name, username, email, street, suite, city, zipcode, phone } = this.state;
        let newUser = new User(id, name, username, email, street, suite, city, zipcode, phone);
        this.props.addUser(newUser);
        this.props.history.push('/');
    }
}

const mapStateToProps = (state, ownProps) => ({
    lastId: state.users[state.users.length - 1].id,
});

const actions = {
    addUser,
};

export default connect(mapStateToProps, actions)(UserAdd);