import { HTMLCipherSection } from "./htmlCipher.js";

class HTMLAtbashSection extends HTMLCipherSection{
    constructor() {
        super();
    }

    changeCharacter(character) {
        let index = this.characters.indexOf(character); 
        if(index == -1) return character;
        let reverseCharacter = this.characters.split('').reverse().join('');
        return reverseCharacter[index];
    }
}

export{HTMLAtbashSection};