import { Button } from './Button';

const selectedButton = (button, ...buttons) => {
    button.element.classList.add('active');
    button.element.classList.remove('deactive');
    for (const btn of buttons) {
        btn.element.classList.remove('active');
        btn.element.classList.add('deactive');
    }
};

export const buttonCreated = (tablica) => {
    let buttonsText;
    const p = document.createElement('p');

    if (tablica == 'categories') {
        p.textContent = 'Categories';
        buttonsText = ['Vehicles', 'People', 'Starships'];
    } else if (tablica == 'levels') {
        p.textContent = 'Level of the oponnent';
        buttonsText = ['Padawan', 'Jedi Knight', 'Jedi Master'];
    }

    let level = buttonsText[0];

    const button1 = new Button(buttonsText[0]);
    const button2 = new Button(buttonsText[1]);
    const button3 = new Button(buttonsText[2]);
    p.className = 'category-level-paragraph';
    button1.element.className = 'button1 active';
    button2.element.className = 'button2 deactive';
    button3.element.className = 'button3 deactive';

    button1.element.addEventListener('click', () => {
        selectedButton(button1, button2, button3);
        level = buttonsText[0];
        console.log(level);
    });

    button2.element.addEventListener('click', () => {
        selectedButton(button2, button1, button3);
        level = buttonsText[1];
        console.log(level);
    });

    button3.element.addEventListener('click', () => {
        selectedButton(button3, button2, button1);
        level = buttonsText[2];
        console.log(level);
    });

    console.log(button1.element);
    const elements = [p, button1.element, button2.element, button3.element];
    const view = {
        level: level.toLowerCase(),
        elements: elements,
    };
    return view;
};

// export const categoriesChosen = ({ onClick }) => {
//     const categories = ['Vehicles', 'People', 'Starships'];

//     for (let category in categories) {
//         const buttonVehicles = new Button(category, onClick);
//         buttonVehicles.element.className = 'categoriesChosen';

//         return buttonVehicles.element;
//     }
// };

// export const levelChosen = ({ onClick }) => {
//     const levels = ['Padawan', 'Jedi Knight', 'Jedi Master'];

//     for (let level in levels) {
//         const buttonLevels = new Button(level, onClick);
//         buttonLevels.element.className = 'levelChosen';

//         return buttonLevels.element;
//     }
// };
