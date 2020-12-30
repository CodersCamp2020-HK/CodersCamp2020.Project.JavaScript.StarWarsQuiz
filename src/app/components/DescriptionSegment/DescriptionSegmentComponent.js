import { ViewModelComponent } from '../ViewModelComponent';
import { DescriptionSegmentModel } from './DescriptionSegmentModel';
import './DescriptionSegmentView.scss';

const DescriptionSegmentView = `
<div \class="description-segment-view-container"\>
    <h2 \class="description-segment-view-header"\><%- header %></h2>
    <ul \class="description-segment-view-properties"\>
        <% _.forIn(values, function(value, key) { 
            %><li>
                <span><%- key %></span>
                <span><%- value %></span>
            </li><% }) %>
    </ul>
</div>`;

class DescriptionSegmentComponent extends ViewModelComponent {
    constructor({ header, values }) {
        super({ view: DescriptionSegmentView, model: new DescriptionSegmentModel({ header, values }) });
        this.model.onHeaderChange.add(this.__rerender.bind(this));
        this.model.onDescriptionChange.add(this.__rerender.bind(this));
    }
}

export { DescriptionSegmentComponent };
