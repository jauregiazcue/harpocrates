import { HTMLObject } from "./htmlObject.js";

/** 
 * The Search bar that allows to search the ciphers by name
 * @extends HTMLObject
*/
class HTMLSearchBar extends HTMLObject {
    /**
     * @constructor
     * Sets the object type to article and
     * the list of articles to empty
     */
    constructor() {
        super();
        this.objectType = "article";
        this.articles = [];
    }

    /**
     * Sets the header with the title and sets the event listener
     * @param {HTMLArticles[n]} articles -Sets the array of articles
     */
    setArticles(articles) {
        this.articles = articles;
    }

    /**
     * Sets the article with a form and an input
     */
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

    /**
     * Activates all articles
     */
    activateAllArticles() {
        for (let article of this.articles) {
            article.object.classList.add("myArticle");
            article.object.classList.remove("myHiddenArticle");
        }

    }

    /**
     * If the article has the search inside of it
     * it will show, else it will hidden
     * @param {string} search -The string that will check if it
     * is inside of any titles
     */
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