import { HTMLCaesarSection } from "./htmlCaesarSection.js";

class HTMLVigereSection extends HTMLCaesarSection {
    constructor(title) {
        super(title);
    }

    render() {
        super.render();
        this.key.type = "text";
        this.key.value = "key";
    }

    changeCharacter(character) {
        
        

        return "a";
    }

    keySettings() {
        
    }
}

export { HTMLVigereSection };