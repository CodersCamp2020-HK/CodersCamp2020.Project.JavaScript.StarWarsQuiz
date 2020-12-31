export class UserInfo {
    constructor({ firstName, lastName, gender }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

    get firstName() {
        return this.__firstName;
    }

    set firstName(value) {
        if (!(typeof value == 'string')) throw new Error('firstName should be typeof string');
        if (!value.match(/^[a-zA-Z\s]{2,}$/)) throw new Error('firstName should match requirements');
        this.__firstName = value;
    }

    get lastName() {
        return this.__lastName;
    }

    set lastName(value) {
        if (!(typeof value == 'string')) throw new Error('lastName should be typeof string');
        if (!value.match(/^[a-zA-Z\s]*$/)) throw new Error('lastName should match requirements');
        this.__lastName = value;
    }

    get gender() {
        return this.__gender;
    }

    set gender(value) {
        if (!(typeof value == 'string')) throw new Error('gender should be typeof string');
        if (!value.match(/^(female|male)$/)) throw new Error('gender should match requirements');
        this.__gender = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
