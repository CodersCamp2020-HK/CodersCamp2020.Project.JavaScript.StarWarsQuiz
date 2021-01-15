let imageFile = require('../../static/assets/ui/StarWarsLogo1.png');
const logoPicture = () => {
    const logoContainer = document.createElement('img');
    logoContainer.src = imageFile;
    logoContainer.className = 'logo';
    return logoContainer;
};

export { logoPicture };
