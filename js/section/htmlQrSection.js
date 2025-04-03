import { HTMLSection } from "./htmlSection.js";
import { fetchManager } from "../api.js";

class HTMLQRSection extends HTMLSection {
    constructor() {
        super();
    }

    generateQRCode(url) {
        if (!url || url == "") return false;
        let myURL;
        try {
            myURL = new URL(url);
        } catch (e) {
            return false;
        }
        return "https://api.qrserver.com/v1/create-qr-code/?data=" + myURL + "&amp;size=100x100";
    }

    render() {
        super.render();

        this.image = this.makeNewElement("img", "");

        fetchManager.getGameData("https://jauregiazcue.github.io/portfolio/").then((data) => {
            if (data != false) {
                const blobUrl = URL.createObjectURL(data);
                this.image.src = blobUrl;
            }
        });

        this.link = this.makeNewElement("button","");
        this.link.classList.add("fa-solid","fa-file-arrow-down");
        this.link.addEventListener('click', () => {
            this.download(this.image.src);
        });

        this.leftInput.addEventListener('input', () => {
            fetchManager.getGameData(this.leftInput.value).then((data) => {
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