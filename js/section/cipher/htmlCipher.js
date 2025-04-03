import { HTMLSection } from "../htmlSection.js";

/** 
 * The section that will be added into an HTMLArticle
 * This is a father section that will be extended by different 
 * ciphering techniques
 * @extends HTMLSection
*/
class HTMLCipherSection extends HTMLSection {

    /**
    * @constructor
    * Just calls the constructor of the HTMLSection and 
    * sets the charaters to the alphabet in lower case
    */
    constructor() {
        super();
        this.characters = "abcdefghijklmnopqrstuvwxyz";
    }

    /**
    * Generates the left and right section with their inputs, and sets 
    * the event listener of the left input to do a function that changes the
    * string of the left input by something and then puts it into the right input
    */
    render() {
        super.render();

        this.leftInput.addEventListener('input', () => {
            this.setFunction();
        });

        const rightform = this.makeNewElement("form", "");
        this.rightInput = this.makeNewElement("textarea", "", "inputSection");

        this.rightInput.readOnly = true;

        rightform.appendChild(this.rightInput);
        this.rightDiv.appendChild(rightform);
    }

    /**
    * The function that will be done whenever the left input is updated.
    * Sets the right input using the left input and the changeCharater function
    */
    setFunction() {
        console.clear();
        this.leftInput.value = this.leftInput.value.toLowerCase();
        let leftArray = this.leftInput.value.split("");
        let rightString = "";
        for (let i = 0; i < leftArray.length; i++) {
            rightString += this.changeCharacter(leftArray[i]);
        }
        this.rightInput.value = rightString;
    }

    /**
    * Bare bones function that the children 
    * will use to create their ciphering techniques
    * @param {string} character - The character that will be changed in some way
    * @returns {string} -The changed character
    */
    changeCharacter(character) {
        return character;
    }
}

export { HTMLCipherSection };