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
        this.key = this.makeNewElement("input", "","keySection");
        this.key.type = "number";
        this.key.value = 0;
        this.leftInput = this.makeNewElement("textarea", "", "inputSection");

        this.leftInput.addEventListener('input', () => {
            this.setFunction();
        });

        this.key.addEventListener('input', () => {
            if(this.key.value == "" || this.key.value < 0 || this.key.value > 25) {
                this.key.value = 0;
            }
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

    changeCharacter(character) {
        
        let index = this.characters.indexOf(character);
        if(index == -1) return character;

        return this.characters[(index + parseInt(this.key.value)) % this.characters.length];
    }
}

export { HTMLCaesarSection };