class Fetch {
    constructor() {

    }

    async fetchData(url, parameters = [""], key = "") {
        try {
            const finalURL = new URL(url);
            Object.keys(parameters).forEach(param => {
                finalURL.searchParams.append(param, parameters[param]);
            });

            const response = await this.setResponse(finalURL, key);
            const data = await response.blob();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async setResponse(url, key) {
        if (key == "") return await fetch(url);

        return await fetch(url.toString(), {
            headers: {
                Authorization: "Bearer " + key
            }
        });
    }

    async getGameData(url) {
        let myURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + url + "&amp;size=100x100";
        try {
            let aux = new URL(url);
        } catch {
            return false;
        }
        const result = await this.fetchData(myURL);
        return result;
    }

}

let fetchManager = new Fetch();

export { fetchManager }