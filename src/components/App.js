import React,{useState,useEffect} from "react";
import MovieSearch from "./MovieSearch";
import MovieFight from "./MovieFight";
import MovieDetail from "./MovieDetail";



const App = () =>{
  
  



    return (
        <div>
             <div className="moving__text">
                <span>MMF  ... |   Muggle Movie Fights ... | MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
              
                </span>
            </div>
             <div className="movie__container">
                <MovieFight/>
                <div className="fight__container">
                    <div>
                        <MovieSearch />
                        <MovieDetail />
                    </div>
                    {/* <div>
                        <MovieSearch fetchMovie={fetchMovie}/>
                        <MovieDetail/>
                     </div> */}
                </div>
               
            </div>
        </div>
    )

}

export default App;