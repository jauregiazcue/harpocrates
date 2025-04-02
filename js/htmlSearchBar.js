import { HTMLObject } from "./htmlObject.js";

class HTMLSearchBar extends HTMLObject{
    constructor() {
        super();
        this.objectType = "article";

    }

    render() {
        this.object.innerHTML = "";

        const keyForm = this.makeNewElement("form", "");
        this.key = this.makeNewElement("input", "");

        this.dropDownButton = document.createElement("button");
        this.dropDownButton.classList.add("fa-solid","fa-bookmark");
        

        keyForm.appendChild(this.key);
        this.object.append(keyForm,this.dropDownButton);
    }

    setSection(section) {
        this.section = section;
        this.section.style.display = "none";

        this.br = document.createElement("br");
        this.object.appendChild(this.br);
        this.br.style.display = "none";
        this.titleSection.addEventListener("click",(event)=>{
            event.stopPropagation();
            if(!this.section) return; 
            if(this.section.style.display == "none") {
                this.dropDownButton.style.transform = "rotate(180deg)";
                this.section.style.height = "auto";
                this.section.style.display = "flex";
                this.br.style.display = "block";
            } else {
                this.dropDownButton.style.transform = "rotate(0deg)";
                this.section.style.height = "0px";
                this.section.style.display = "none";
                this.br.style.display = "none";
            }
            
        });

        
    }
}

export {HTMLSearchBar};