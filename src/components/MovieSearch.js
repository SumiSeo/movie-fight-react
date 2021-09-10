import React from "react";
import {useState, useEffect} from "react"
import OmdbApi from "../apis/OmdbApi";
import axios from "axios";
const API_KEY = "f9b10297";


const  MovieSearch = ( ) => {
    const onInputChange = async(e) =>{
        const searchTerm = e.target.value;
        const response = await axios.get(`http://www.omdbapi.com/`,{
            params:{
                apikey : API_KEY,
                s:searchTerm,
            }
        })
        console.log(response);
    }
    return (
        <div className="searchContianer">
            <form>
                <input
                onChange = {(e)=>{onInputChange(e)}}
                id ="searchInput"
                type="text"/>
            </form>
        </div>
    )

}


export default MovieSearch;