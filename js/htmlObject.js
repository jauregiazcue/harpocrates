

class HTMLObject {
    constructor() {
        this.object = null;
        
        this.objectType = "";
    }

    initHTML(fatherElement,...elementClasses) {
        this.createHTML(elementClasses);
        this.render();
        fatherElement.appendChild(this.object);
    }

    createHTML(...elementClasses) {
        if (this.object) return;
        this.object = document.createElement(this.objectType);
        for (let i of elementClasses) {
            this.object.classList.add(i);
        }
    }

    makeNewElement(elementType, textContent = "", classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        if(classes) newElement.classList.add(classes);
        
        return newElement;
    }

    render() {
        
    }

}

export {HTMLObject};