import { HTMLSection } from "../htmlSection.js";

class HTMLCipherSection extends HTMLSection {
    constructor() {
        super();
        this.characters = "abcdefghijklmnopqrstuvwxyz";
    }
    render() {
        super.render();

        this.leftInput.addEventListener('input',() => {
            this.setFunction();
        });

       const rightform = this.makeNewElement("form", "");
        this.rightInput = this.makeNewElement("textarea", "","inputSection");

        this.rightInput.readOnly = true;

        rightform.appendChild(this.rightInput);
        this.rightDiv.appendChild(rightform);
    }

    setFunction() {
        console.clear();
        this.leftInput.value = this.leftInput.value.toLowerCase();
        let leftArray = this.leftInput.value.split("");
        let rightString = "";
        for(let i = 0; i < leftArray.length; i++) {
            rightString += this.changeCharacter(leftArray[i]);
        }
        this.rightInput.value = rightString;
    }

    changeCharacter(character) {
        
    }
}

export{HTMLCipherSection};