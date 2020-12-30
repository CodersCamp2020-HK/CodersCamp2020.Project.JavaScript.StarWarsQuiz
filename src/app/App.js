import { DescriptionSegmentComponent } from './components/DescriptionSegment/DescriptionSegmentComponent';
import { renderElement } from './shared/dom';
import './App.scss';

export const App = () => {
    const desc = new DescriptionSegmentComponent({ header: 'Napis', values: { Key1: 'Prop1', Key2: 'Prop2' } });
    renderElement({ element: desc.view, on: '#swquiz-app' });
    const id = setInterval(() => {
        desc.model.changeDescription({ key: 'Time', newValue: new Date().toISOString() });
    }, 1000);
    setTimeout(() => {
        desc.model.changeDescription({ key: 'Key1', newValue: null });
    }, 5000);
    setTimeout(() => {
        desc.model.changeDescription({ key: 'Key2', newValue: null });
        clearInterval(id);
    }, 10000);
};
