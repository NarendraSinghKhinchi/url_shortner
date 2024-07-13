import axios from "axios";

async function shortUrl(url){
    
    const data = new FormData();
    data.append('url', url);

    const options = {
    method: 'POST',
    url: 'https://url-shortener-service.p.rapidapi.com/shorten',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_API_HOST
    },
    data: data
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data.result_url
    } catch (error) {
        console.error(error);
    }
}
// const options = {
//         method : "POST" ,
//         url: `https://cleanuri.com/api/v1/shorten?url=${url}`
//     }
//     try{
//         const response = await axios(options) ;
//         return response.result_url ;
//     }catch (err){
//         return err.response.data ;
//     }
export default shortUrl ;