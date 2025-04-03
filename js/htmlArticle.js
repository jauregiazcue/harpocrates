import { HTMLObject } from "./htmlObject.js";

class HTMLArticle extends HTMLObject{
    constructor(title) {
        super();
        this.title = title;
        this.objectType = "article";
        this.dropDownButton = null;
        this.section = null;
    }

    render() {
        //Empty article
        this.object.innerHTML = "";

        const title = this.makeNewElement("h2", this.title, "articleTitle");

        this.titleSection = this.makeNewElement("section","","myTitle");

        this.favorite = document.createElement("button");
        let fav = localStorage.getItem(this.title);
        if(fav) {
            if(fav == "true") {
                this.favorite.classList.add("fa-solid","fa-bookmark");
                
            } else {
                this.favorite.classList.add("fa-regular","fa-bookmark");
            }
        } else {
            this.favorite.classList.add("fa-regular","fa-bookmark");
        }
        this.setFavorite();

        this.dropDownButton = document.createElement("button");
        this.dropDownButton.classList.add("fa-solid","fa-caret-down","myArticleButton");
        

        let rightSection = this.makeNewElement("section","","myArticleButtons");
        rightSection.append(this.favorite,this.dropDownButton);
        this.titleSection.append(title,rightSection);
        this.object.appendChild(this.titleSection);
    }

    setFavorite() {
        this.favorite.addEventListener("click",(event)=>{
            event.stopPropagation();
            if(this.favorite.classList.contains("fa-solid")) {
                this.favorite.classList.remove("fa-solid","fa-bookmark");
                this.favorite.classList.add("fa-regular","fa-bookmark");
                localStorage.setItem(this.title,"false");
            } else {
                this.favorite.classList.remove("fa-regular","fa-bookmark");
                this.favorite.classList.add("fa-solid","fa-bookmark");
                localStorage.setItem(this.title,"true");
            }
        });
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

export {HTMLArticle};