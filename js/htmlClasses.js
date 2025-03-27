


class HTMLMain {
    constructor(...articles) {
        this.articles = articles;
        this.setHeader();
        this.setMain(...articles);
        this.setFooter();
        
    }

    setHeader() {
        this.header = document.getElementsByClassName("myHeader")[0];

        const image = document.createElement("h1");
        image.classList.add("fa-solid","fa-user-secret");

        const image2 = document.createElement("h1");
        image2.classList.add("fa-solid","fa-user-secret");
        

        const text = document.createElement("h1");
        text.textContent = "Harpocrates";

        this.header.append(image,text,image2);

    }

    setMain(...articles) {
        this.main = document.getElementsByClassName("myMain")[0];
        console.log(this.main);
        for(let article of articles) {
            article.initHTML("myArticle");
            this.main.appendChild(article.article);
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

