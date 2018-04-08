import {Address} from './Address';

export class User {
    constructor(id, fullName, username, email, street, suite, city, zipcode, phone) {
        this.id = id;
        this.name = fullName;
        this.username = username;
        this.email = email;
        this.address = new Address(street, suite, city, zipcode);
        this.phone = phone;
    }
}