import { Button } from './Button';

export const categoriesChosen = ({ onClick }) => {
    const categories = ['Vehicles', 'People', 'Starships'];

    for (let category in categories) {
        const buttonVehicles = new Button(category, onClick);
        buttonVehicles.element.className = 'categoriesChosen';

        return buttonVehicles.element;
    }
};

export const levelChosen = ({ onClick }) => {
    const levels = ['Padawan', 'Jedi Knight', 'Jedi Master'];

    for (let level in levels) {
        const buttonLevels = new Button(level, onClick);
        buttonLevels.element.className = 'levelChosen';

        return buttonLevels.element;
    }
};
