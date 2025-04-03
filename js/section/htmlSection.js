import { HTMLObject } from "../htmlObject.js";

/** 
 * The section that will be added into an HTMLArticle
 * This is a bare bones section that will be later be extended
 * @extends HTMLObject
*/
class HTMLSection extends HTMLObject{

    /**
     * @constructor
     * Sets the object type to a section
     */
    constructor() {
        super();
        this.objectType = "section";
    }

    /**
    * Generates the left div with the form and the input, 
    * and sets the right div empty for childs to implement
    */
    render() {
        //Empty article
        this.object.innerHTML = "";

        this.leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        this.leftInput = this.makeNewElement("textarea", "","inputSection");

        this.rightDiv = this.makeNewElement("div", "", "rightSection");

        leftform.appendChild(this.leftInput);
        this.leftDiv.appendChild(leftform);
        this.object.append(this.leftDiv,this.rightDiv);
    }
}

export {HTMLSection};