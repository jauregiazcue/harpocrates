import { HTMLObject } from "./htmlObject.js";
import { HTMLCaesarSection } from "./section/cipher/htmlCaesarSection.js";

class HTMLSearchBar extends HTMLObject {
    constructor() {
        super();
        this.objectType = "article";
        this.articles = [];
    }

    setArticles(articles) {
        this.articles = articles;
    }

    render() {
        this.object.innerHTML = "";

        const keyForm = this.makeNewElement("form", "");
        this.key = this.makeNewElement("input", "");

        this.key.addEventListener('input', () => {
            if (this.key.value == "") {
                this.activateAllArticles();
            } else {
                this.checkNames(this.key.value);
            }


        });


        keyForm.appendChild(this.key);
        this.object.append(keyForm);
    }

    activateAllArticles() {
        for (let article of this.articles) { 
            article.object.classList.add("myArticle");
            article.object.classList.remove("myHiddenArticle");
        }
        
    }

    checkNames(search) {
        let smallSearch = search.toLowerCase();
        for (let article of this.articles) {
            let title = article.title.toLowerCase();
            if (title.includes(smallSearch)) {
                article.object.classList.add("myArticle");
                article.object.classList.remove("myHiddenArticle");
            } else {
                article.object.classList.add("myHiddenArticle");
                article.object.classList.remove("myArticle");
            }
        }
    }
}

export { HTMLSearchBar };