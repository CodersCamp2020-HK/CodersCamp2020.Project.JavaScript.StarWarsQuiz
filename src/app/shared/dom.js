function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

function elementFrom({ html }) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

function renderElement({ element, on, elementScope }) {
    const scope = isElement(elementScope) ? elementScope : document;
    const placeholder = typeof on === 'string' ? scope.querySelector(on) : on;
    placeholder.parentNode.replaceChild(element, placeholder);
    return element;
}

function renderHtml({ html, on, elementScope }) {
    const element = elementFrom({ html });
    return renderElement({ element, on, elementScope });
}

export { renderElement, renderHtml, elementFrom, isElement };
