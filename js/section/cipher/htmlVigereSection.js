import { HTMLCaesarSection } from "./htmlCaesarSection.js";

class HTMLVigereSection extends HTMLCaesarSection {
    constructor(title) {
        super(title);

        this.keyIndex = 0;
    }

    render() {
        super.render();
        this.key.type = "text";
        this.key.value = "key";
    }

    setFunction() {
        this.keyIndex = 0;
        this.leftInput.value = this.leftInput.value.toLowerCase();
        let leftArray = this.leftInput.value.split("");
        let rightString = "";
        for(let i = 0; i < leftArray.length; i++) {
            rightString += this.changeCharacter(leftArray[i]);
        }
        this.rightInput.value = rightString;
    }

    changeCharacter(character) {
        if(this.key.value == "") return character;
        let keyArray = this.key.value.split("");
        let index = this.characters.indexOf(character);

        let newCharacter = (index + this.characters.indexOf(keyArray[this.keyIndex]) + 1) % this.characters.length;
        this.keyIndex ++;
        if(this.keyIndex >= keyArray.length) this.keyIndex = 0;

        return this.characters[newCharacter];
    }

    keySettings() {
        
    }
}

export { HTMLVigereSection };