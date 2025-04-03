
/** 
 * This is the class for fetching the information of an api
*/
class Fetch {
    /** 
    * Fetches the data from the api
    * @param {string} url -The url for the api
    * @param {string} parameters -The parameters to add in the url
    * @param {string} key -The key to the api
    * @returns {Promise<Blob>} -The data in img format
    */
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

    /** 
    * Fetches the data from the api, if it does not have a key
    * it only uses the url, else it will add the key to the fetch
    * @param {string} url -The url for the api
    * @param {string} key -The key to the api
    */
    async setResponse(url, key) {
        if (key == "") return await fetch(url);

        return await fetch(url.toString(), {
            headers: {
                Authorization: "Bearer " + key
            }
        });
    }

    /** 
    * Returns the QR code
    * @param {string} url -URL that wants to be made into a QR code
    * @returns {*} -The result of that fetch
    */
    async getQrCode(url) {
        let myURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + url + "&amp;size=100x100";
        try {
            new URL(url);
        } catch {
            return false;
        }
        const result = await this.fetchData(myURL);
        return result;
    }

}

let fetchManager = new Fetch();

export { fetchManager }