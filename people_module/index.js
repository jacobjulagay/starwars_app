const superagent = require('superagent');
const config = require('./config.json')

// // Function that allows search from the API
const search = async (searchInput = 'ana') =>{ // Setting a default to ana, if no userinput 
    const searchURL = `${config.url}?search=${searchInput}`
    console.log(searchURL)
    try{
        const searchResponse = await superagent.get(searchURL);
        return searchResponse.body; // '.body' returns obj w/out other crap. 
    }catch(error){
        return error;
    }
}

// //
// //Function that fetches from the API
const fetch = async (url) =>{
    const fetchURL = url
    try{
        const fetchIDResponse = await superagent.get(fetchURL)
        console.log(fetchIDResponse)
        return fetchIDResponse.body; // '.body' returns obj w/out other crap. 

    }catch(error){
        return error;
    }
}

// Exported functions that can be used
module.exports ={
    search,
    fetch

}
