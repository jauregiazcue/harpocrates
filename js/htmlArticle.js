import { HTMLObject } from "./htmlObject.js";

class HTMLArticle extends HTMLObject{
    constructor(title) {
        super();
        this.title = title;
        this.objectType = "article";
    }

    render() {
        //Empty article
        this.object.innerHTML = "";

        const title = this.makeNewElement("h2", this.title, "articleTitle");

        const image = document.createElement("button");
        image.classList.add("fa-solid","fa-caret-down");
        this.object.append(title,image);
    }

}

export {HTMLArticle};