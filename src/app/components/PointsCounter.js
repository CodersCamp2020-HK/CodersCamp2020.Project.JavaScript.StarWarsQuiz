export class PointsCounter {
    createPointsCounter(pkt = 0) {        
        const wrapper = document.createElement('div')
        const desc = document.createElement('div')
        const points = document.createElement('div')
        desc.innerHTML = 'Points'
        points.innerHTML = pkt
        wrapper.className = 'pointsCounter_wrapper'
        desc.className = 'pointsCounter_desc'
        points.className = 'pointsCounter_points'
        wrapper.appendChild(desc)
        wrapper.appendChild(points)
        return wrapper
    }
}