const LogoPicture = function () {
    const logoContainer = document.createElement('img');
    logoContainer.src = './src/static/assets/ui/StarWarsLogo.png';
    logoContainer.className = 'Logo';
    return logoContainer;
};

export { LogoPicture };
