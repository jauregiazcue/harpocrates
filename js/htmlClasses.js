
class HTMLArticle  {
    constructor(title) {
        this.article = null;
        this.title = title;
    }

    initHTML(...elementClasses) {
        this.createHTML(elementClasses);
        this.render();
    }

    createHTML(...elementClasses) {
        if(this.article) return;
        this.article = document.createElement("article");
        for(let i of elementClasses) {
            this.article.classList.add(i);
        }
    }

    makeNewElement(elementType, textContent = "", classes) {
        const newElement = document.createElement(elementType);
        newElement.textContent =  textContent;
        newElement.classList.add(classes);

        return newElement;
    }

    render() {
        //Empty article
        this.article.innerHTML = "";

        const title = this.makeNewElement("h2","QR Code Creator","articleTitle");
        this.article.append(title);

        return this.article;
    }

}


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


let aux = new HTMLArticle("Cool Name");
let myMain = new HTMLMain(aux);

