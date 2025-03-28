import { HTMLMain } from "./htmlMain.js"
import { HTMLArticle } from "./htmlArticle.js";
import { HTMLSection } from "./htmlSection.js";
import { HTMLQRSection } from "./htmlQrSection.js";
import { HTMLAtbashSection } from "./htmlAtbashSection.js";
import { HTMLCaesarSection } from "./htmlCaesarSection.js";

function main() {
    //SET INITIAL ARTICLE
    let articleList = [
        new HTMLArticle("QR Code Creator"),
        new HTMLArticle("Caesar Cipher"),
        new HTMLArticle("Atbash Cipher"),
        new HTMLArticle("A1Z26 Cipher"),
        new HTMLArticle("Vigere Cipher")
    ]

    let sectionList = [
        new HTMLQRSection("Test QR"),
        new HTMLCaesarSection("Test QR"),
        new HTMLAtbashSection("Test QR"),
        new HTMLAtbashSection("Test QR"),
        new HTMLCaesarSection("Test QR")
    ]

    let myMain = new HTMLMain(articleList);
    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].initHTML(articleList[i].object, "mySection");
        articleList[i].setSection(sectionList[i].object);
    }
}

main();