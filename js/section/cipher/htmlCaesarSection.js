import { HTMLCipherSection } from "./htmlCipher.js";

class HTMLCaesarSection extends HTMLCipherSection {
    constructor(title) {
        super(title);
    }

    render() {
        //Empty article
        this.object.innerHTML = "";

        const topDiv = this.makeNewElement("div", "", "topSection");
        const bottomDiv = this.makeNewElement("div","","bottomSection");

        const leftDiv = this.makeNewElement("div", "", "rightSection");
        const leftform = this.makeNewElement("form", "","keyForm");

        const keyForm = this.makeNewElement("form", "");
        this.key = this.makeNewElement("textarea", "","keySection");
        this.leftInput = this.makeNewElement("textarea", "", "inputSection");

        this.leftInput.addEventListener('input', () => {
            this.setFunction();
        });

        const rightDiv = this.makeNewElement("div", "", "rightSection");
        const rightform = this.makeNewElement("form", "");
        this.rightInput = this.makeNewElement("textarea", "", "inputSection");

        this.rightInput.readOnly = true;
        leftform.append(this.leftInput);
        leftDiv.appendChild(leftform);

        rightform.appendChild(this.rightInput);
        rightDiv.appendChild(rightform);

        keyForm.appendChild(this.key);
        topDiv.appendChild(keyForm);
        bottomDiv.append(leftDiv,rightDiv);
        this.object.append(topDiv,bottomDiv);
    }
}

export { HTMLCaesarSection };