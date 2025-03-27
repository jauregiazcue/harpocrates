import { HTMLMain } from "./htmlMain.js"
import { HTMLArticle } from "./htmlArticle.js";
import { HTMLSection } from "./htmlSection.js";




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
        new HTMLSection("Test QR"),
        new HTMLSection("Test QR"),
        new HTMLSection("Test QR"),
        new HTMLSection("Test QR"),
        new HTMLSection("Test QR")
    ]

    let myMain = new HTMLMain(articleList);
    for(let i = 0; i < sectionList.length; i++) {
        sectionList[i].initHTML(articleList[i].object, "mySection");
        articleList[i].setSection(sectionList[i].object);
    }
}

main();