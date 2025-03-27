import { HTMLObject } from "./htmlObject.js";

class HTMLSection extends HTMLObject{
    constructor(title) {
        super();
        this.title = title;
        this.objectType = "section";
    }

    render() {
        //Empty article
        this.object.innerHTML = "";

        const title = this.makeNewElement("h2", this.title, "articleTitle");

        this.object.append(title);
    }

}

export {HTMLSection};