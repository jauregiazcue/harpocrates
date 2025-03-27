class HTMLArticle {
    constructor(title) {
        this.article = null;
        this.title = title;
    }

    initHTML(...elementClasses) {
        this.createHTML(elementClasses);
        this.render();
    }

    createHTML(...elementClasses) {
        if (this.article) return;
        this.article = document.createElement("article");
        for (let i of elementClasses) {
            this.article.classList.add(i);
        }
    }

    makeNewElement(elementType, textContent = "", classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        newElement.classList.add(classes);

        return newElement;
    }

    render() {
        //Empty article
        this.article.innerHTML = "";

        const title = this.makeNewElement("h2", this.title, "articleTitle");
        this.article.append(title);

        return this.article;
    }

}

export {HTMLArticle};