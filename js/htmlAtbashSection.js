import { HTMLSection } from "./htmlSection.js";

class HTMLAtbashSection extends HTMLSection{
    constructor(title) {
        super(title);
    }
    render() {
        //Empty article
        this.object.innerHTML = "";

        const leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        const leftInput = this.makeNewElement("textarea", "");
        //leftInput.type = "text";

        const rightDiv = this.makeNewElement("div", "", "rightSection");
        const rightform = this.makeNewElement("form", "");
        const rightInput = this.makeNewElement("textarea", "");


        leftform.appendChild(leftInput);
        leftDiv.appendChild(leftform);

        rightform.appendChild(rightInput);
        rightDiv.appendChild(rightform);
        this.object.append(leftDiv,rightDiv);
    }
}

export{HTMLAtbashSection};