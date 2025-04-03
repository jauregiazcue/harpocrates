
/** 
 * The manager of all html, generates the header, main and footer
*/
class HTMLMain {

    /**
     * @constructor
     * @param {string} searchBar - The searchbar
     * @param {HTMLSection[n]} articles - Array of all articles
     */
    constructor(searchBar, articles) {
        this.articles = articles;
        this.searchBar = searchBar;
        this.setHeader();
        this.main = document.getElementsByClassName("myMain")[0];
        this.addArticlesToMain();
        this.setFooter();

    }
    /**
     * Sets the header with the title and sets the event listener
     * of the favorites button
     */
    setHeader() {
        this.header = document.getElementsByClassName("myHeader")[0];

        this.favoritesButton = document.createElement("button");
        this.favoritesButton.textContent = "Favorites";


        this.favoritesButton.addEventListener('click', () => {
            this.favorites();
        });

        const text = document.createElement("h1");
        text.textContent = " Harpocrates";

        this.header.append(text, this.favoritesButton);

    }

    /**
     * If you are at home it will change to Favorites,
     * this only makes it show the ones that are favorites,
     * and changes the Favorites button to the Home button
     * which will return you to home and make all articles appear
     */
    favorites() {
        if (this.favoritesButton.textContent == "Home") {
            for (let article of this.articles) {
                article.object.classList.add("myArticle");
                article.object.classList.remove("myHiddenArticle");
            }
            this.favoritesButton.textContent = "Favorites";
        } else {
            for (let article of this.articles) {
                if (localStorage.getItem(article.title) == "true") {
                    article.object.classList.add("myArticle");
                    article.object.classList.remove("myHiddenArticle");
                } else {
                    article.object.classList.add("myHiddenArticle");
                    article.object.classList.remove("myArticle");
                }
            }
            this.favoritesButton.textContent = "Home";
        }

    }

     /**
     * Sets the search bar and the articles 
     */
    addArticlesToMain() {
        this.searchBar.initHTML(this.main, "mySearchBar");
        this.searchBar.setArticles(this.articles);
        for (let article of this.articles) {
            article.initHTML(this.main, "myArticle");
        }
    }

     /**
     * Sets the footer
     */
    setFooter() {
        this.footer = document.getElementsByClassName("myFooter")[0];
        const text = document.createElement("p");
        text.textContent = "© Kai Jauregi Azcue. All rights reserved.";
        this.footer.append(document.createElement("hr"), text);
    }

}
export { HTMLMain };

