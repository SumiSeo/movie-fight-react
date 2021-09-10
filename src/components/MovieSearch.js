import React from "react";
import {useState, useEffect} from "react"
import axios from "axios";
const API_KEY = "f9b10297";



const MovieSearch = ({fetchMovie}) => {
    const [movie, setMovie] = useState("Avengers");
    const [movieLists, setMovieLists] = useState([]);
    useEffect(()=>{
        const fetchMovie = async (movie) =>{
            const {data}= await axios.get(`http://www.omdbapi.com/`,{
                params:{
                    apikey : API_KEY,
                    s: movie,
                }
            })
                if(data){
                    setMovieLists(data.Search);
                    console.log(movieLists);
                }
               
         
        }
        if(movie){
            fetchMovie(movie);
        }
        
    },[movie]);

   const renderedResults = movieLists.map((movie)=>{
       console.log(movie)
        return(
            <div key={movie.imdbID}>{movie.Title}</div>
        )
   })


    return (
        <div className="searchContianer">
            <form>
                <input
                onKeyPress= {(e)=>{
                    if(e.key ==="Enter"){
                        setMovie(e.target.value)
                    }
                    }}
                // value= {movie ? movie : ""}
                id ="searchInput"
                type="text"/>
            </form>
            <div>{renderedResults}</div>
        </div>
    )

}


export default MovieSearch;