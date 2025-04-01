import { HTMLSection } from "../htmlSection.js";

class HTMLCipherSection extends HTMLSection{
    constructor(title) {
        super(title);
        this.characters = "abcdefghijklmnopqrstuvwxyz";
    }
    render() {
        //Empty article
        this.object.innerHTML = "";

        const leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        this.leftInput = this.makeNewElement("textarea", "","inputSection");

        this.leftInput.addEventListener('input',() => {
            this.setFunction();
        });

        const rightDiv = this.makeNewElement("div", "", "rightSection");
        const rightform = this.makeNewElement("form", "");
        this.rightInput = this.makeNewElement("textarea", "","inputSection");

        this.rightInput.readOnly = true;
        leftform.appendChild(this.leftInput);
        leftDiv.appendChild(leftform);

        rightform.appendChild(this.rightInput);
        rightDiv.appendChild(rightform);
        this.object.append(leftDiv,rightDiv);
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