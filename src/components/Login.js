import React, { Component } from 'react';
import axios from 'axios';

export default class login extends Component {
    state = {
        form: {
            user: '',
            password: ''
        },
        acces_token:''


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

        const res =await axios.post('http://167.99.162.146/users/login',
            {
                user: this.state.form.user,
                password: this.state.form.password,

            }
        );
        const {access_token} = res.data;
        window.location.href = `/feed/${access_token}`;

    }

    render() {
        return (
            <div className="centr">
                <div className="box">
                    <div className="text-center">
                        <div className="form-group">
                            <h1>Login</h1>
                            <label >User</label>
                            <br />
                            <input type="text"
                                className="form-control" name="user" onChange={this.handleChange} value={this.state.form.user} />
                            <br />
                            <label >Password</label>
                            <input type="password"
                                className="form-control" name="password" onChange={this.handleChange} value={this.state.form.password} />
                            <br />
                            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesion</button>
                        </div>
                    </div>


                </div>
            
            </div>

        )
    }
}
