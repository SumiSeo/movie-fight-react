import React from "react";
import MovieSearch from "./MovieSearch";
import MovieFight from "./MovieFight";

const App = () =>{

    return (
        <div>
             <div className="moving__text">
                <span>MMF  ... |   Muggle Movie Fights ... | MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                MMF  ... |   Muggle Movie Fights ... |
                
                </span>
            </div>
             <div className="movie__container">
                <MovieFight/>
                <MovieSearch/>
            </div>
        </div>
    )

}

export default App;