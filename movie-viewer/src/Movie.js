import React from "react";

const Movie = (props) => {
return(
        <div>
            {/* <img src={require(`./images/${props.picture}`)} alt="" /> */}
            <h2>{props.name}</h2>
            <div>
                <h5>Character</h5>
                <p>{props.charac}</p>
                <h5>Description</h5>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Movie