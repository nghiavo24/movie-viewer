import React from "react";


const Sidebar = (props) => {
    // let path= "/images/" + props.picture
    // console.log(path)
    return(
        <div>
            <div>{props.name}</div>
            <img src={require(`./images/${props.picture}`)} alt =""/>
        </div>
    )
}

export default Sidebar