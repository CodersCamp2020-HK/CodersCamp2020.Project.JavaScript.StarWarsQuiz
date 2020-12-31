import { ViewModelComponent } from '../ViewModelComponent';
import { DescriptionSegmentComponent } from '../DescriptionSegment/DescriptionSegmentComponent';
import { ProfileModel } from './ProfileModel';
import './ProfileView.scss';

const ProfileView = `
<div \class="profile-view-container"\>
    <div \class="profile-view-photo"\>
        <img src="<%- imgUrl %>"/>
    </div>
    <div \class="profile-view-description"\>
        <template \id="profile-view-info"\></template>
        <template \id="profile-view-location"\></template>
        <template \id="profile-view-contact"\></template>
    </div>
</div>
`;

class ProfileComponent extends ViewModelComponent {
    constructor({ user, userImageProvider }) {
        const infoComponent = new DescriptionSegmentComponent({
            header: 'Info',
            values: {
                Name: user.info.fullName,
                Gender: user.info.gender === 'male' ? '♂️' : '♀️',
            },
        });
        const locationComponent = new DescriptionSegmentComponent({
            header: 'Location',
            values: {
                Country: user.location.country,
                City: user.location.city,
                Street: user.location.street,
            },
        });
        const contactComponent = new DescriptionSegmentComponent({
            header: 'Contact',
            values: {
                Email: user.contact.email,
                Phone: user.contact.phone,
                Cell: user.contact.cell,
            },
        });
        super({
            view: ProfileView,
            model: new ProfileModel({ user, userImageProvider }),
            children: {
                '#profile-view-info': infoComponent.view,
                '#profile-view-location': locationComponent.view,
                '#profile-view-contact': contactComponent.view,
            },
        });
        this.model.onUserChange
            .add(this.__rerender.bind(this))
            .add(({ newUser }) => {
                infoComponent.model.values = {
                    Name: newUser.info.fullName,
                    Gender: newUser.info.gender === 'male' ? '♂️' : '♀️',
                };
            })
            .add(({ newUser }) => {
                locationComponent.model.values = {
                    Country: newUser.location.country,
                    City: newUser.location.city,
                    Street: newUser.location.street,
                };
            })
            .add(({ newUser }) => {
                contactComponent.model.values = {
                    Email: newUser.contact.email,
                    Phone: newUser.contact.phone,
                    Cell: newUser.contact.cell,
                };
            });
    }
}

export { ProfileComponent };
