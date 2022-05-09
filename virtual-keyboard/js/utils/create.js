/**
 * @param {String} el
 * @param {String} classNames
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param  {...array} dataAttr
 */
export default function create(el, classNames = '', child, parent, ...dataAttr) {
    let element = null;   // Create HTMLElement
try {
    element = document.createElement(el); //обертка нативными методами
} catch (error) {
    throw new Error('Unable to create HTMLElement! You should give a proper HTML tag name');
}

  // split and apply classNames
if (classNames) element.classList.add(...classNames.split(' ')); // "class1", "class2" принимает строки через запятую высыпать массив

if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
} else if (child && typeof child === 'object') {
    element.appendChild(child);
} else if (child && typeof child === 'string') {
    element.innerHTML = child;
}

if (parent) {
    parent.appendChild(element);
}

// <span id="" data-code="" disabled></span> el.dataset.code = ""
if (dataAttr.length) {
    dataAttr.forEach(([ attrName, attrValue ]) => {
        if (attrValue === '') {
            element.setAttribute(attrName, '');
        } else { //регулярное выражение
            if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
                element.setAttribute(attrName, attrValue);
            } else { element.dataset[attrName] = attrValue;
            }
        }});
    }
return element;
}
