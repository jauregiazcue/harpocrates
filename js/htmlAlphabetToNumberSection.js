import { HTMLAtbashSection } from "./htmlAtbashSection.js";

class HTMLAlphabetToNumberSection extends HTMLAtbashSection{
    constructor(title) {
        super(title);
        this.numbers = [];
        for(let i = 1; i < 27; i++) {
            this.numbers.push(i.toString());
        }
    }

    changeCharacter(character) {
        let index = this.characters.indexOf(character); 
        if(index == -1) return character;
        return this.numbers[index];
    }
}

export{HTMLAlphabetToNumberSection};