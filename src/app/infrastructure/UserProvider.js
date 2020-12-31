import { User } from '../domain/User';
import { UserContact } from '../domain/UserContact';
import { UserLocation } from '../domain/UserLocation';
import { UserInfo } from '../domain/UserInfo';

class UserProvider {
    async getRandomUser() {
        const response = await (await fetch('https://randomuser.me/api?nat=gb')).json();
        const rawUserData = response.results[0];
        return this.__parseRawUserData(rawUserData);
    }

    __parseRawUserData(data) {
        const id = Number(data.picture.large.match(/\/(\d+)\.jpg/)[1]);
        const info = new UserInfo({
            firstName: data.name.first,
            lastName: data.name.last,
            gender: data.gender,
        });
        const location = new UserLocation({
            city: data.location.city,
            country: data.location.country,
            street: `${data.location.street.name}, ${data.location.street.number}`,
        });
        const contact = new UserContact({
            phone: data.phone,
            email: data.email,
            cell: data.cell,
        });
        return new User({ id, info, location, contact });
    }
}

export { UserProvider };
