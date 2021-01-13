const logoPicture = () => {
    const logoContainer = document.createElement('img');
    logoContainer.src = '../../static/assets/ui/StarWarsLogo1.png';
    logoContainer.className = 'logo';
    return logoContainer;
};

export { logoPicture };
