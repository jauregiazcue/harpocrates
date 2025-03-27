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

        const leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        const leftInput = this.makeNewElement("input", "");
        leftInput.type = "text";

        const rightDiv = this.makeNewElement("div", "", "rightSection");

        leftform.appendChild(leftInput);
        leftDiv.appendChild(leftform);
        this.object.append(leftDiv,rightDiv);
    }
}

export {HTMLSection};