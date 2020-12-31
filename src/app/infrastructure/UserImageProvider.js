import { User } from '../domain/User';

class UserImageProvider {
    constructor() {
        this.__sizeMapping = new Map([
            ['large', 'portraits'],
            ['medium', 'portraits/med'],
            ['thumbnail', 'portraits/thumb'],
        ]);
        this.__genderMapping = new Map([
            ['male', 'men'],
            ['female', 'women'],
        ]);
    }

    getUserImageUrl({ user, size }) {
        if (!(user instanceof User)) throw new Error(`user should be instanceof User`);
        if (!this.__sizeMapping.has(size)) throw new Error(`user should match requirements`);
        return `https://randomuser.me/api/${this.__sizeMapping.get(size)}/${this.__genderMapping.get(
            user.info.gender,
        )}/${user.id}.jpg`;
    }
}

export { UserImageProvider };
