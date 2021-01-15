import { Button } from './Button';

const selectedLevel = (button, ...buttons) => {
    button.element.classList.add('active');
    button.element.classList.remove('deactive');
    for (const btn of buttons) {
        btn.element.classList.remove('active');
        btn.element.classList.add('deactive');
    }
};

export const opponentLevel = () => {
    const view = {
        level: 'padawan',
    };
    const opponentLevelDiv = document.createElement('div');
    opponentLevelDiv.className = 'opponentLevelDiv';
    const button1 = new Button('Padawan');
    const button2 = new Button('Jedi Knight');
    const button3 = new Button('Jedi Master');
    button1.element.className = 'button1 active';
    button2.element.className = 'button2 deactive';
    button3.element.className = 'button3 deactive';

    button1.element.addEventListener('click', () => {
        selectedLevel(button1, button2, button3);
        view.level = 'padawan';
    });

    button2.element.addEventListener('click', () => {
        selectedLevel(button2, button1, button3);
        view.level = 'jedi knight';
    });

    button3.element.addEventListener('click', () => {
        selectedLevel(button3, button2, button1);
        view.level = 'jedi master';
    });

    console.log(button1);
    console.log(button1.element);
    opponentLevelDiv.append(button1.element, button2.element, button3.element);
    view.element = opponentLevelDiv;
    return view;
};
