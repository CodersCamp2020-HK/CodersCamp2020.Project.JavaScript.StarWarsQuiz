export const InputName = () => {
    const wrapperElement = document.createElement('div');
    const userElement = document.createElement('p');
    const inputElement = document.createElement('input');
    inputElement.placeholder = 'Write your name here';
    wrapperElement.appendChild(userElement);
    wrapperElement.appendChild(inputElement);
    wrapperElement.className = 'inputName_wrapper';
    userElement.className = 'inputName_user';
    inputElement.className = 'inputName_input';
    userElement.appendChild(document.createTextNode('NAME:'));
    return wrapperElement;
};
