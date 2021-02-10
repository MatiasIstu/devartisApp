import React, { Component } from 'react'
import {
    
    Link
  } from "react-router-dom";
import axios from 'axios'



export default class Feed extends Component {

    state = {
        feeds: [],
        url: '',
        access_token: this.props.match.params.access_token
    }
    componentDidMount() {
        this.getFeed();
    }


    handleChange = async e => {
        await this.setState({

            ...this.state,
            [e.target.name]: e.target.value

        })
        console.log(this.state);
    }




    addFeed= async ()=> {
        await axios.post("http://167.99.162.146/feeds/add", {
            
                url: this.state.url
           
        }, {
            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        }
        )
        this.getFeed();
    }


    getFeed=async()=> {
        const res = await axios.get("http://167.99.162.146/feeds", {

            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        
        })
        this.setState({ feeds: res.data })
    }
    deleteFeed = async(id)=>{
        await axios.delete(`http://167.99.162.146/feeds/${id}`,{
            headers:{
                Authorization: `Bearer ${this.state.access_token}`
            }
        })
        this.getFeed();
    }

    render() {
        return (
            <div >
                <div className="row ss " >
                    <h1>Agregar un feed</h1>
                    <div>
                    <input className = "padd" type="text" name="url" onChange={this.handleChange} />
                    <button className="btn btn-primary" onClick={this.addFeed}>Agregar Feed</button>
                    </div>
                   
                </div>
                
                <hr/>
                <div className="row">{
                    this.state.feeds.map(feed =>
                        <div><p>Titulo: {feed.title}</p>
                        <p>Url: {feed.url}</p>
                        <p>Id: {feed.id}</p>
                        <button onClick={()=>this.deleteFeed(feed.id)}>Borrar</button>
                        <Link to={`/feed/${feed.id}/articles/${this.state.access_token}`}><button>Ver</button></Link>
                       </div>

                    )
                }

                </div>

            </div>
        )
    }
}
