import { ProfileComponent } from './components/Profile/ProfileComponent';
import { renderElement } from './shared/dom';
import './App.scss';
import { UserProvider } from './infrastructure/UserProvider';
import { UserImageProvider } from './infrastructure/UserImageProvider';

export const App = async () => {
    const userProvider = new UserProvider();
    const userImageProvider = new UserImageProvider();
    const user = await userProvider.getRandomUser();
    const profile = new ProfileComponent({ user, userImageProvider });
    renderElement({ element: profile.view, on: '#swquiz-app' });
    setInterval(async () => {
        const user = await userProvider.getRandomUser();
        profile.model.user = user;
    }, 10000);
};
