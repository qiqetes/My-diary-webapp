import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="col">
                    <div className="row">
                        <h1>Login here</h1>
                    </div>
                    <div className="row">
                        <button>Login with google</button>
                    </div>
                </div>
            </div>
        )
    }
}
