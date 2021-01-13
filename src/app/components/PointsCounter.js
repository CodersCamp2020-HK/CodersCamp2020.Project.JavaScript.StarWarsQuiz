export function pointsCounter(pkt) {
    if (pkt >= 0) {
        const wrapper = document.createElement('div');
        const desc = document.createElement('div');
        const points = document.createElement('div');
        desc.appendChild(document.createTextNode('Points'));
        points.appendChild(document.createTextNode(pkt));
        wrapper.className = 'pointsCounter_wrapper';
        desc.className = 'pointsCounter_desc';
        points.className = 'pointsCounter_points';
        wrapper.appendChild(desc);
        wrapper.appendChild(points);
        return wrapper;
    } else {
        throw new Error('No argument pass to function.');
    }
}