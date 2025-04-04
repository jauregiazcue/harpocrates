import { HTMLMain } from "./htmlMain.js";
import { HTMLSearchBar } from "./htmlSearchBar.js";
import { HTMLArticle } from "./htmlArticle.js";
import { HTMLQRSection } from "./section/htmlQrSection.js";
import { HTMLAtbashSection } from "./section/cipher/htmlAtbashSection.js";
import { HTMLAlphabetToNumberSection } from "./section/cipher/htmlAlphabetToNumberSection.js";
import { HTMLCaesarSection } from "./section/cipher/htmlCaesarSection.js";
import { HTMLVigeneSection } from "./section/cipher/htmlVigenereSection.js";


function main() {
    //Set articles
    let articleList = [
        new HTMLArticle("QR Code Creator"),
        new HTMLArticle("Caesar Cipher"),
        new HTMLArticle("Atbash Cipher"),
        new HTMLArticle("A1Z26 Cipher"),
        new HTMLArticle("Vigenere Cipher")
    ]
    //Set the sections of the articles
    let sectionList = [
        new HTMLQRSection(),
        new HTMLCaesarSection(),
        new HTMLAtbashSection(),
        new HTMLAlphabetToNumberSection(),
        new HTMLVigeneSection()
    ]
    //Create the main with a search bar and the articles
    new HTMLMain(new HTMLSearchBar(), articleList);

    //Set the sections and add them into their articles
    for (let i = 0; i < sectionList.length; i++) {
        if (sectionList[i] instanceof HTMLCaesarSection) {
            console.log(articleList[i].title);
            sectionList[i].initHTML(articleList[i].object, "myCaesarSection");
            articleList[i].setSection(sectionList[i].object);
        } else {
            sectionList[i].initHTML(articleList[i].object, "mySection");
            articleList[i].setSection(sectionList[i].object);
        }

    }
}

main();