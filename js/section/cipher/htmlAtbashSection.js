import { HTMLCipherSection } from "./htmlCipher.js";

/** 
 * The section that will be added into an HTMLArticle
 * This section is the one that you give a word and
 * letter by letter it reversed it in the alphabet
 * (a=z,b=y...)
 * @extends HTMLCipherSection
*/
class HTMLAtbashSection extends HTMLCipherSection {
    /**
    * @constructor
    * Just calls the constructor of the HTMLCipherSection 
    */
    constructor() {
        super();
    }

    /**
    * When given a character it will check it's mirror in the alphabet
    * Imagine the alphabet is separated by the middle, whenever you give it
    * one character (example A) it will return it's mirror (example Z)
    * @param {string} character -The character that will be changed
    * @returns {string} -The character of the same index if the alphabet was in reverse
    */
    changeCharacter(character) {
        let index = this.characters.indexOf(character);
        if (index == -1) return character;
        let reverseCharacter = this.characters.split('').reverse().join('');
        return reverseCharacter[index];
    }
}

export { HTMLAtbashSection };