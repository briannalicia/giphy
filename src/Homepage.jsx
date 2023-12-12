import { useState } from "react";

function Homepage(props) {

    let [gifData, setGifData] = useState({})
    
    let key = import.meta.env.VITE_API_URL
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&limit=1`


    async function getRandomGif () {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setGifData(data)
        }
        catch (error){
            console.log(error)

        }
    }
    
    // console.log(gifData);
    console.log(gifData?.data)
    console.log(gifData?.data?.images?.original?.url)

    let gif = gifData?.data?.images?.downsized?.url;

    return (
        <div>
            <h1>Random Gif Generator</h1>
            <button onClick={getRandomGif}>Get Random Gif</button>
            <br /><br />   
            <img src={gif} alt="Random Gif" />
        </div>
    );
}

export default Homepage;