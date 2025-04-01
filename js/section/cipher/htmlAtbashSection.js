import { HTMLCipherSection } from "./htmlCipher.js";

class HTMLAtbashSection extends HTMLCipherSection{
    constructor(title) {
        super(title);
    }

    changeCharacter(character) {
        let index = this.characters.indexOf(character); 
        if(index == -1) return character;
        let reverseCharacter = this.characters.split('').reverse().join('');
        return reverseCharacter[index];
    }
}

export{HTMLAtbashSection};