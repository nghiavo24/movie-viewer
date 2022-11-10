import React from "react";
import { useParams } from 'react-router-dom'

const Movie = (props) => {
    const movieSelection = useParams();
    console.log(movieSelection)
    console.log(props.data)
    const selectedMovie = props.data.find((item) => item.slug === movieSelection.title)
    if(selectedMovie == null){
        return null
    }
    return(
        <div className="grid-main">
            <img src={require(`./images/${selectedMovie.poster}`)} />
            <h1>{selectedMovie.title}</h1>
            <h5>Characters:</h5>
            <ul>
                {selectedMovie.main_characters.map((character) => 
                    <li>{character}</li>
                )}
            </ul>
            <h5>Description</h5>
            <p>{selectedMovie.description}</p>
        </div>
    )
}

export default Movie