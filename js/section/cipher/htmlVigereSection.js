import { HTMLCaesarSection } from "./htmlCaesarSection.js";

/** 
 * The section that will be added into an HTMLArticle
 * This section is the one that you give a word and offsets it by the index
 * of the letter that goes now of the key
 * if the key is key, and the letter is a, due to the first value of key is k
 * and a is 0, the return character will be k
 * @extends HTMLCaesarSection
*/
class HTMLVigereSection extends HTMLCaesarSection {

    /**
    * @constructor
    * Just calls the constructor of the HTMLCipherSection 
    * and sets the keyIndex to 0
    */
    constructor() {
        super();
        this.keyIndex = 0;
    }

    /**
    * Calls the render of htmlCaesarSection and set the key to be text
    * and start with key
    */
    render() {
        super.render();
        this.key.type = "text";
        this.key.value = "key";
    }

    /**
    * The function that will be done whenever the left input is updated.
    * Sets the right input using the left input and the changeCharater function
    * also sets the keyIndex to 0
    */
    setFunction() {
        this.keyIndex = 0;
        this.leftInput.value = this.leftInput.value.toLowerCase();
        let leftArray = this.leftInput.value.split("");
        let rightString = "";
        for (let i = 0; i < leftArray.length; i++) {
            rightString += this.changeCharacter(leftArray[i]);
        }
        this.rightInput.value = rightString;
    }

/**
    * It gets a character and it will return it with an offset using the character of the key
    * @param {string} character - The character that will be changed in some way
    * @returns {string} -The changed character
    */
    changeCharacter(character) {
        if (this.key.value == "") return character;
        let keyArray = this.key.value.split("");
        let index = this.characters.indexOf(character);

        let newCharacter = (index + this.characters.indexOf(keyArray[this.keyIndex])) % this.characters.length;
        this.keyIndex++;
        if (this.keyIndex >= keyArray.length) this.keyIndex = 0;

        return this.characters[newCharacter];
    }

}

export { HTMLVigereSection };