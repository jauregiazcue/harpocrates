

class HTMLMain {
    constructor(searchBar, articles) {
        this.articles = articles;
        this.searchBar = searchBar;
        this.setHeader();
        this.main = document.getElementsByClassName("myMain")[0];
        this.addArticlesToMain();
        this.setFooter();

    }

    setHeader() {
        this.header = document.getElementsByClassName("myHeader")[0];

        this.favoritesButton = document.createElement("button");
        this.favoritesButton.textContent = "Favorites";


        this.favoritesButton.addEventListener('click', () => {
            this.favorites();
        });

        const text = document.createElement("h1");
        text.textContent = " Harpocrates";
        //text.classList.add("fa-solid", "fa-user-secret");

        this.header.append(text, this.favoritesButton);

    }

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

    addArticlesToMain() {
        this.searchBar.initHTML(this.main, "mySearchBar");
        this.searchBar.setArticles(this.articles);
        for (let article of this.articles) {
            article.initHTML(this.main, "myArticle");
        }
    }


    setFooter() {
        this.footer = document.getElementsByClassName("myFooter")[0];
        const text = document.createElement("p");
        text.textContent = "© Kai Jauregi Azcue. All rights reserved.";
        this.footer.append(document.createElement("hr"), text);
    }

}
export { HTMLMain };

