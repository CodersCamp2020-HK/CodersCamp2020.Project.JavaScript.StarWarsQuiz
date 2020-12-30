import { elementFrom, renderElement } from '../shared/dom';
import _ from 'lodash';

class ViewModelComponent {
    constructor({ view, model, children }) {
        this.__template = _.template(view || '<template></template>');
        this.__model = model || {};
        this.__children = children || {};
        this.__render();
    }

    __render() {
        this.__view = elementFrom({ html: this.__template(this.__model) });
        for (let [on, element] of Object.entries(this.__children)) {
            renderElement({ element, on, elementScope: this.view });
        }
    }

    __rerender() {
        const [parentElement, oldChild] = [this.view.parentElement, this.view];
        this.__render();
        if (parentElement) {
            parentElement.replaceChild(this.view, oldChild);
        }
    }

    get view() {
        return this.__view;
    }

    get model() {
        return this.__model;
    }
}

export { ViewModelComponent };
