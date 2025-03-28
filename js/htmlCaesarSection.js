import { HTMLSection } from "./htmlSection.js";

class HTMLCaesarSection extends HTMLSection{
    constructor(title) {
        super(title);
    }
    render() {
        //Empty article
        this.object.innerHTML = "";

        const leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        const leftInput = this.makeNewElement("textarea", "");

        const rightDiv = this.makeNewElement("div", "", "rightSection");

        leftform.appendChild(leftInput);
        leftDiv.appendChild(leftform);
        this.object.append(leftDiv,rightDiv);
    }
}

export {HTMLCaesarSection};