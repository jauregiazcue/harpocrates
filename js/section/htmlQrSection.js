import { HTMLSection } from "./htmlSection.js";
import { fetchManager } from "../api.js";

/** 
 * The section that will be added into an HTMLArticle
 * This is the section that creates QR Codes
 * @extends HTMLSection
*/
class HTMLQRSection extends HTMLSection {

    /**
     * @constructor
     * Just calls the constructor of the HTMLSection
     */
    constructor() {
        super();
    }

    /**
    * Generates the left div with the form and the input, and the right div with the qr image
    * sets the event listener for left input to change the qr if it is an url 
    */
    render() {
        super.render();

        this.image = this.makeNewElement("img", "");

        fetchManager.getQrCode("https://jauregiazcue.github.io/portfolio/").then((data) => {
            if (data != false) {
                const blobUrl = URL.createObjectURL(data);
                this.image.src = blobUrl;
            }
        });

        this.link = this.makeNewElement("button", "");
        this.link.classList.add("fa-solid", "fa-file-arrow-down");
        this.link.addEventListener('click', () => {
            this.download(this.image.src);
        });

        this.leftInput.addEventListener('input', () => {
            fetchManager.getQrCode(this.leftInput.value).then((data) => {
                if (data != false) {
                    const blobUrl = URL.createObjectURL(data);
                    this.image.src = blobUrl;
                    this.link.href = blobUrl;
                }
            });

        });

        this.rightDiv.appendChild(this.image);
        this.rightDiv.appendChild(this.link);
    }

    /**
    * The function that makes it download the qr code in png format
    * @param {string} url - Url to the qr code image to be downloaded
    */
    download(url) {
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = "file.png";
        a.target = "_blank";
        this.leftInput.append(a);
        a.click();
        this.leftInput.removeChild(a);
    }

}

export { HTMLQRSection };