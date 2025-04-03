
/** Father Class to all different objects of the project */
class HTMLObject {
    /**
     * @constructor
     * Generates a null object and an empty object type
     */
    constructor() {
        this.object = null;

        this.objectType = "";
    }

    /**
     * Inits the HTML by creating the element, setting it's classes and it's parent
     * Generates a null object and an empty object type
     * @param {*} fatherElement - The html element that will be it's parent
     * @param {...string} elementClasses - List of all the classes the element will have
     */
    initHTML(fatherElement, ...elementClasses) {
        this.createHTML(elementClasses);
        this.render();
        fatherElement.appendChild(this.object);
    }

    /**
     * Sets all the classes
     * @param {...string} elementClasses - List of all the classes the element will have
     */
    createHTML(...elementClasses) {
        if (this.object) return;
        this.object = document.createElement(this.objectType);
        for (let i of elementClasses) {
            this.object.classList.add(i);
        }
    }
    /**
    * Creates an html element with the type, text and classes send, at returns it
    * @param {string} elementType - A
    * @param {string} textContent- t
    * @param {string} classes- t
    * @returns Returns the new HTML Element
    */
    makeNewElement(elementType, textContent = "", classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        if (classes) newElement.classList.add(classes);

        return newElement;
    }

    /**
    * Empty function for childs to create their additions to the object
    */
    render() {

    }

}

export { HTMLObject };