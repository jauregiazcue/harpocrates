import { HTMLCipherSection } from "./htmlCipher.js";

/** 
 * The section that will be added into an HTMLArticle
 * This section is the one that you give a word and offsets it by x
 * (example you give the letter a and the offset 1 so it will give you b)
 * @extends HTMLCipherSection
*/
class HTMLCaesarSection extends HTMLCipherSection {

    /**
    * @constructor
    * Just calls the constructor of the HTMLCipherSection 
    */
    constructor() {
        super();
    }

    /**
    * Generates the top and buttom divs, the top will only have the key input and
    * the bottom div have the left and right section with their inputs, and sets 
    * the event listener of the left input to do a function that changes the
    * string of the left input by something and then puts it into the right input
    */
    render() {
        this.object.innerHTML = "";

        const topDiv = this.makeNewElement("div", "", "topSection");
        const bottomDiv = this.makeNewElement("div", "", "bottomSection");

        this.leftDiv = this.makeNewElement("div", "", "rightSection");
        const leftform = this.makeNewElement("form", "", "keyForm");

        const keyForm = this.makeNewElement("form", "");
        this.key = this.makeNewElement("input", "", "keySection");
        this.key.type = "number";
        this.key.value = 0;
        this.leftInput = this.makeNewElement("textarea", "", "inputSection");

        this.leftInput.addEventListener('input', () => {
            this.setFunction();
        });

        this.key.addEventListener('input', () => {
            this.keySettings();
            this.setFunction();
        });


        this.rightDiv = this.makeNewElement("div", "", "rightSection");
        const rightform = this.makeNewElement("form", "");
        this.rightInput = this.makeNewElement("textarea", "", "inputSection");

        this.rightInput.readOnly = true;
        leftform.append(this.leftInput);
        this.leftDiv.appendChild(leftform);

        rightform.appendChild(this.rightInput);
        this.rightDiv.appendChild(rightform);

        keyForm.appendChild(this.key);
        topDiv.appendChild(keyForm);
        bottomDiv.append(this.leftDiv, this.rightDiv);
        this.object.append(topDiv, bottomDiv);
    }


    /**
    * It gets a character and it will return it with an offset
    * @param {string} character - The character that will be changed in some way
    * @returns {string} -The changed character
    */
    changeCharacter(character) {

        let index = this.characters.indexOf(character);
        if (index == -1) return character;

        return this.characters[(index + parseInt(this.key.value)) % this.characters.length];
    }

    /**
    * Sets the key value to always be between 0 and 25
    */
    keySettings() {
        if (this.key.value == "" || this.key.value < 0 || this.key.value > 25) {
            this.key.value = 0;
        }
    }
}

export { HTMLCaesarSection };