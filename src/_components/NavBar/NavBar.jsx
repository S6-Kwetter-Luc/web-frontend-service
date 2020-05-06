import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {


    render() {
        const {authentication} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom: 50}}>
                <div className="container">
                    <Link className="navbar-brand" to="/" >Kwetter</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">aaaa</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>

                        {
                            authentication.loggedIn
                                ? <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item" style={{marginRight: "20px"}}>
                                        <span className="navbar-text"> Welcome <span
                                            style={{color: "white"}}>{authentication.user.name}</span></span>
                                    </li>
                                    <li>
                                        <a className="btn btn-outline-secondary my-2 my-sm-0"
                                           href="/login">Logout</a>
                                    </li>
                                </ul>
                                : <ul className="nav navbar-nav navbar-right">
                                    <li style={{marginRight: "20px"}}>
                                        <Link className="btn btn-outline-secondary my-2 my-sm-0" to={{
                                            pathname: "/auth",
                                            state: {isRegistering: false}
                                        }}>Login</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-outline-secondary my-2 my-sm-0" to={{
                                            pathname: "/auth",
                                            state: {isRegistering: true}
                                        }}>Sign up!</Link>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

function mapState(state) {
    const {authentication} = state;
    // console.log('auth: ', authentication)
    return {authentication};
}

const actionCreators = {}

const connectedNavBar = connect(mapState, actionCreators)(NavBar);
export {connectedNavBar as NavBar};