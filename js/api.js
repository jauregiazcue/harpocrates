class Fetch {
    constructor() {
        
    }

    async fetchData(url,parameters = [""],key = "") {
        try {
            const finalURL = new URL(url);
            Object.keys(parameters).forEach(param =>{
                finalURL.searchParams.append(param,parameters[param]);
            });
    
            const response = await this.setResponse(finalURL,key);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    
    async setResponse(url,key) {
        if(key == "") return await fetch(url);
        
        return await fetch(url.toString(),{
            headers:{
                Authorization: "Bearer " + key
            }
        });
    }

    async getGameData(url) {
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url;
        const result = await this.fetchData(url);
        return result;
    }
    
}

let fetchManager = new Fetch();

export {fetchManager}