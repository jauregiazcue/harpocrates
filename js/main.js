import {HTMLMain} from "./htmlClasses.js"
import { HTMLArticle } from "./htmlArticle.js";


let aux = new HTMLArticle("QR Code Creator");
let myMain = new HTMLMain(
    new HTMLArticle("QR Code Creator"),
    new HTMLArticle("Second Code"),
    new HTMLArticle("Third Code")
);