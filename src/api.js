import axios from "axios";

async function shortUrl(url){
    const options = {
        method : "GET" ,
        url: `https://api.shrtco.de/v2/shorten?url=${url}`
    }
    try{
        const response = await axios(options) ;
        return response.data ;
    }catch (err){
        return err.response.data ;
    }
}

export default shortUrl ;