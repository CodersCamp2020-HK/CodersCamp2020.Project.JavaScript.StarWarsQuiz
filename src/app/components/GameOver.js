class GameOver {
    constructor(text) {
        this._element = document.createElement('div');
        this._element.textContent = text;
        this._element.className = 'gameOverDiv';
    }

    get elemnt() {
        return this._element;
    }
}

export { GameOver };
