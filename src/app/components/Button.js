import audioUrl from '../../static/assets/audio/saberdown.wav';

class Button {
    constructor(text, onClickFunction = () => {}) {
        this._element = document.createElement('button');
        this._element.textContent = text;
        this._element.classList.add('button');
        this.__audioPlayer = new Audio(audioUrl);
        this.__audioPlayer.volume = 0.1;
        this._element.onclick = () => {
            this.__audioPlayer.pause();
            this.__audioPlayer.play();
            onClickFunction();
        };
    }

    get element() {
        return this._element;
    }

    activate() {
        this._element.classList.add('active');
        this._element.disabled = false;
    }

    deactivate() {
        this._element.classList.remove('active');
        this._element.disabled = true;
    }
}

export { Button };
