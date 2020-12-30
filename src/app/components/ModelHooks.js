import _ from 'lodash';

class ModelHooks {
    constructor(hooks = []) {
        if (!hooks.every((x) => _.isFunction(x))) throw new Error(`${hooks} should be instance of Function`);
        this.__hooks = hooks;
        this.__proxy = {
            add: (hook) => {
                this.add(hook);
                return this.proxy;
            },
            del: (hook) => {
                this.del(hook);
                return this.proxy;
            },
        };
    }

    add(hook) {
        if (!_.isFunction(hook)) throw new Error(`${hook} should be instance of Function`);
        this.__hooks.push(hook);
        return this;
    }

    del(hook) {
        if (!_.isFunction(hook)) throw new Error(`${hook} should be instance of Function`);
        this.__hooks = this.__hooks.filter((x) => x !== hook);
        return this;
    }

    invoke(data) {
        this.__hooks.forEach((hook) => hook(data));
    }

    get proxy() {
        return this.__proxy;
    }
}

export { ModelHooks };
