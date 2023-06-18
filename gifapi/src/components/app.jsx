import React, {useState,useEffect} from "react";
import axios from "axios"
const AppGify=()=>{
    const [gifObj, setGifObject]=useState([]);

    useEffect(()=>{
        async function fetchGif(){
            const gifArray= await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&limit=6&offset=0&rating=g&bundle=messaging_non_clips%22')
            setGifObject(gifArray.data.data)
        }
        fetchGif()
    })

    return(
        <div>
            {Object.values(gifObj).map((item)=>{
                return <img src={item.images.original.url} alt="Not working"></img>
            })}
        </div>
    )
}

export default AppGify