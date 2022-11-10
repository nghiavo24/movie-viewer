import React from "react";
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    
    return(
        <div  className="grid-sidebar">
            {
                props.data.map((item) => {
                    return (
                        <div>
                            <img src={require(`./images/${item.poster}`)} style={{height:"20vh"}}/>
                            <Link 
                                style={{textDecoration:'none', color:'black'}}
                                to={'/' + item.slug}>
                                <p>{item.title}</p>
                                </Link>
                        </div>
                        )
                })
            }
        </div>
    )
}

export default Sidebar