import { HTMLSection } from "./htmlSection.js";
class HTMLQRSection extends HTMLSection{
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
        const image = this.makeNewElement("img", "");
        //image.src="../assets/QuestionMark.png";
        
        leftform.appendChild(leftInput);
        leftDiv.appendChild(leftform);
        rightDiv.appendChild(image);
        this.object.append(leftDiv,rightDiv);
    }
}

export{HTMLQRSection};