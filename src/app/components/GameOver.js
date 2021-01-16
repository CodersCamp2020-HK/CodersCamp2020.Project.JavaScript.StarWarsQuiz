class gameOver {
    constructor(text) {
        this._element = document.createElement('div');
        this._element.textContent = text;
        this._element.className = 'gameOverDiv';
    }
}

export { gameOver };
