import React, {useEffect, useState} from "react";
import axios from 'axios'

const SearchGif = (props) => {
    const [searchRes, setSearchRes] = useState([])

    useEffect(() => {
        const api = 'https://api.giphy.com/v1/gifs/search?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&q=' + props.txt +'&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
        async function searchGif(){
            try {
                const list = await axios.get(api)
                console.log(list)
                setSearchRes(list.data.data)
                
            }
            catch (error) {
                console.error("" + error)
            }
        }
        searchGif()
    }, [props])


    useEffect(()=>{
        async function fetchGif(){
            const gifArray= await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&limit=6&offset=0&rating=g&bundle=messaging_non_clips%22')
            setSearchRes(gifArray.data.data)
        }
        fetchGif()
    }, [])
   

    return(
        <div>
            {Object.values(searchRes).map((item)=>{
                return <img src={item.images.original.url} alt="Not working"></img>
            })}
        </div>
    )
}

export default SearchGif