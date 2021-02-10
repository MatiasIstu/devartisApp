import React, { Component } from 'react'
import axios from 'axios'



export default class Feed extends Component {

    state={
        feed:[]
    }
    componentDidMount(){
        this.getFeed();
     }

    
     async getFeed(){
        const res = await axios.get("http://167.99.162.146/feeds")
        this.setState({feed:res.data})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
