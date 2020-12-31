import { UserContact } from './UserContact';
import { UserInfo } from './UserInfo';
import { UserLocation } from './UserLocation';
class User {
    constructor({ id, info, location, contact }) {
        this.id = id;
        this.info = info;
        this.location = location;
        this.contact = contact;
    }

    get id() {
        return this.__id;
    }

    set id(value) {
        if (!(typeof value === 'number')) throw new Error(`id should be typeof number`);
        this.__id = value;
    }

    get info() {
        return this.__info;
    }

    set info(value) {
        if (!(value instanceof UserInfo)) throw new Error(`info should be instanceof UserInfo`);
        this.__info = value;
    }

    get location() {
        return this.__location;
    }

    set location(value) {
        if (!(value instanceof UserLocation)) throw new Error(`location should be instanceof UserLocation`);
        this.__location = value;
    }

    get contact() {
        return this.__contact;
    }

    set contact(value) {
        if (!(value instanceof UserContact)) throw new Error(`contact should be instanceof UserContact`);
        this.__contact = value;
    }
}

export { User, UserLocation, UserContact };
