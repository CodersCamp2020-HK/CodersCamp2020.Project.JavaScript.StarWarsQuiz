import { ModelHooks } from '../ModelHooks';
import _ from 'lodash';

class DescriptionSegmentModel {
    constructor({ header, values }) {
        this.__onHeaderChangeHooks = new ModelHooks();
        this.__onDescriptionChangeHooks = new ModelHooks();
        this.header = header;
        this.values = values;
    }

    set header(newValue) {
        if (!_.isString(newValue)) throw new Error(`${newValue} should be instance of string`);
        const oldValue = this.__header;
        this.__header = newValue;
        this.__onHeaderChangeHooks.invoke({ oldValue, newValue });
    }

    get header() {
        return this.__header;
    }

    get values() {
        return { ...this.__values };
    }

    set values(newValues) {
        if (!_.isObjectLike(newValues)) throw new Error(`(newValues:${newValues}) should be instance of object`);
        for (let [key, value] of Object.entries(newValues)) {
            if (!_.isString(key)) throw new Error(`(key:${key}) should be instance of string`);
            if (!_.isString(value)) throw new Error(`(value:${value}) should be instance of string`);
        }
        const oldValues = this.__values || {};
        this.__values = {};
        for (let [key, value] of Object.entries(newValues)) {
            this.__values[key] = value;
            if (key in oldValues) {
                this.__values[key] = value;
                this.changeDescription({ key, newValue: newValues[key] });
            }
        }
    }

    changeDescription({ key, newValue }) {
        if (!_.isString(newValue) && newValue !== null)
            throw new Error(`(newValue:${newValue}) should be instance of string`);
        const oldValue = this.__values[key];
        if (newValue === null) {
            delete this.__values[key];
        } else {
            this.__values[key] = newValue;
        }
        this.__onDescriptionChangeHooks.invoke({ key, oldValue, newValue });
    }

    get onHeaderChange() {
        return this.__onHeaderChangeHooks.proxy;
    }

    get onDescriptionChange() {
        return this.__onDescriptionChangeHooks.proxy;
    }
}

export { DescriptionSegmentModel };
