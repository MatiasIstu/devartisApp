import React, { Component } from 'react'
import axios from 'axios'

export default class Articulos extends Component {
    state = {
        articles:[],
        id: this.props.match.params.id,
        access_token: this.props.match.params.access_token
    }

    getArticulos=async()=> {
        const res = await axios.get(`http://167.99.162.146/feeds/${this.state.id}/articles` , {

            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        
        })
        this.setState({ articles: res.data.articles })
    }


    render() {
        return (
            <div>
                {
                this.state.articles.map(article =>
                    <div>
                        <p>Titulo:</p>
                        <p>Summary:</p>
                        <p>Date:</p>
                    </div>
                    )
                }

            </div>
        )
    }
}
