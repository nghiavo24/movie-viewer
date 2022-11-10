import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
        <Link style={{textDecoration:'none'}} to='/'>
        <h1 
        style={{
            backgroundColor:'black', 
            color:'white', 
            padding:'10px', 
            textAlign:'center'
            }}>
        Movie Viewer
        </h1>
        </Link>
        </div>
    )
}

export default Header