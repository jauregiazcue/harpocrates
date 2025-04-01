import { HTMLSection } from "./htmlSection.js";
import { fetchManager } from "../api.js";

class HTMLQRSection extends HTMLSection {
    constructor(title) {
        super(title);
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
        //Empty article
        this.object.innerHTML = "";

        const leftDiv = this.makeNewElement("div", "", "leftSection");
        const leftform = this.makeNewElement("form", "");
        this.leftInput = this.makeNewElement("textarea", "","inputSection");

        const rightDiv = this.makeNewElement("div", "", "rightSection");
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

        leftform.appendChild(this.leftInput);
        leftDiv.appendChild(leftform);
        rightDiv.appendChild(this.image);
        rightDiv.appendChild(this.link);
        this.object.append(leftDiv, rightDiv);
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