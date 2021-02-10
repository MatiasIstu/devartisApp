import React, { Component } from 'react'
import "../App.css"

export default class Homepage extends Component {
    render() {
        return (
           <div className="row">
               <div >
               <a href="/login" className="boton"><button>Login</button></a>
               <a href="/register" className="boton"><button>Register</button></a>
               </div>
               
           </div>
        )
    }
}
