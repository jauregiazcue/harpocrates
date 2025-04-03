import { HTMLMain } from "./htmlMain.js"
import { HTMLArticle } from "./htmlArticle.js";
import { HTMLSearchBar } from "./htmlSearchBar.js";
import { HTMLQRSection } from "./section/htmlQrSection.js";
import { HTMLAtbashSection } from "./section/cipher/htmlAtbashSection.js";
import { HTMLAlphabetToNumberSection } from "./section/cipher/htmlAlphabetToNumberSection.js";
import { HTMLCaesarSection } from "./section/cipher/htmlCaesarSection.js";
import { HTMLVigereSection } from "./section/cipher/htmlVigereSection.js";

function main() {
    //SET INITIAL ARTICLE
    let articleList = [
        new HTMLArticle("QR Code Creator"),
        new HTMLArticle("Caesar Cipher"),
        new HTMLArticle("Atbash Cipher"),
        new HTMLArticle("A1Z26 Cipher"),
        new HTMLArticle("Vigenere Cipher")
    ]

    let sectionList = [
        new HTMLQRSection(),
        new HTMLCaesarSection(),
        new HTMLAtbashSection(),
        new HTMLAlphabetToNumberSection(),
        new HTMLVigereSection()
    ]

    let myMain = new HTMLMain(new HTMLSearchBar(), articleList);

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