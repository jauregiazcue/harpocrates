import { HTMLCipherSection } from "./htmlCipher.js";

/** 
 * The section that will be added into an HTMLArticle
 * This section is the one that you give a word and
 * it changes to a number (a=1 ... z=26)
 * @extends HTMLCipherSection
*/
class HTMLAlphabetToNumberSection extends HTMLCipherSection {
    /**
    * @constructor
    * Just calls the constructor of the HTMLCipherSection 
    */
    constructor() {
        super();
    }

    /**
    * When given a character it will give you the index + 1 of it
    * (example : a is in the first position in the array, so the
    * index is 0, this functions will return 1)
    * @param {string} character -The character that will be changed
    * @returns {number} -The index of that character + 1
    */
    changeCharacter(character) {
        let index = this.characters.indexOf(character);
        if (index == -1) return character;
        return index + 1;
    }
}

export { HTMLAlphabetToNumberSection };