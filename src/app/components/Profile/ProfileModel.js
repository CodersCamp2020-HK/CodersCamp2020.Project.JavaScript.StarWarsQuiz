import { ModelHooks } from '../ModelHooks';
import { User } from '../../domain/User';

class ProfileModel {
    constructor({ user, userImageProvider }) {
        if (!(user instanceof User)) throw new Error(`user should be instanceof User`);
        this.__user = user;
        this.__userImageProvider = userImageProvider;
        this.__onUserChangeHooks = new ModelHooks();
        this.imgUrl = userImageProvider.getUserImageUrl({ user, size: 'large' });
    }

    set user(newUser) {
        if (!(newUser instanceof User)) throw new Error(`user should be instanceof User`);
        const oldUser = this.__user;
        this.__user = newUser;
        this.imgUrl = this.__userImageProvider.getUserImageUrl({ user: this.user, size: 'large' });
        this.__onUserChangeHooks.invoke({ oldUser, newUser });
    }

    get user() {
        return this.__user;
    }

    get onUserChange() {
        return this.__onUserChangeHooks.proxy;
    }
}

export { ProfileModel };
