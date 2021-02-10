import React, { Component } from 'react';
import axios from 'axios';

export default class login extends Component {
    state = {
        form:{
            user: '',
            password: ''
        }
   

    }

   

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    iniciarSesion = async () => {

        await axios.post('http://167.99.162.146/users/register', 
        {params:
            {user:this.state.form.user,
            password:this.state.form.password,
            }
        }
        ,{headers:
            {
                access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"

            }});
    
        window.location.href = '/feed';

    }

    render() {
        return (
            <div>
                <div className="box">
                    <div className="text-center">
                        <div className="form-group">
                            <h1>Rgister</h1>
                            <label >User</label>
                            <br />
                            <input type="text"
                                className="form-control" name="user" onChange={this.handleChange}  value={this.state.form.user} />
                            <br />
                            <label >Password</label>
                            <input type="password"
                                className="form-control" name="password" onChange={this.handleChange}  value={this.state.form.password}/>
                            <br />
                            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Registrarse</button>
                        </div>
                    </div>


                </div>
                <a href="/"><button className="btn btn-primary">Back to Homepage</button></a>
            </div>

        )
    }
}
