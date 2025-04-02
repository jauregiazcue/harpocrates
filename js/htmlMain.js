

class HTMLMain {
    constructor(searchBar,articles) {
        this.articles = articles;
        this.searchBar = searchBar;
        this.setHeader();
        this.main = document.getElementsByClassName("myMain")[0];
        this.addArticlesToMain();
        this.setFooter();
        
    }

    setHeader() {
        this.header = document.getElementsByClassName("myHeader")[0];

        this.dropDownButton = document.createElement("button");
        this.dropDownButton.classList.add("fa-solid","fa-bookmark");
        
        const text = document.createElement("h1");
        text.textContent =  " Harpocrates";
        text.classList.add("fa-solid","fa-user-secret");

        this.header.append(text,this.dropDownButton);

    }

    addArticlesToMain() {
        this.searchBar.initHTML(this.main,"mySearchBar");
        this.searchBar.setArticles(this.articles);
        for(let article of this.articles) {
            article.initHTML(this.main,"myArticle");
        }
    }


    setFooter() {
        this.footer = document.getElementsByClassName("myFooter")[0];
        const text = document.createElement("p");
        text.textContent = "© Kai Jauregi Azcue. All rights reserved.";
        this.footer.append(document.createElement("hr"),text);
    }
   
}
export {HTMLMain};

