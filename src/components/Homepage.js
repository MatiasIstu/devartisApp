import React, { Component } from 'react'
import "../App.css"
import {

    Link
} from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <div className="centr">
                <Link to ="/login"><button className="boton">Login</button></Link>
                <Link to="/register"><button className="boton">Register</button></Link>
            </div>



        )
    }
}
