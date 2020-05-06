import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {userActions} from '../_actions';
import Particles from "react-particles-js";
import {particlesConfig} from "../particlesJsConfig";

class HomePage extends React.Component {
    render() {
        // const { user, users } = this.props;
        // console.log(this);
        return (
            <div>
                <div>
                    <Particles className="particles" params={particlesConfig}/>
                </div>
                <div style={{height: "calc(100vh - 250px)"}} className={"container"}>
                    <div className={"row h-100 justify-content-center align-items-center"}>
                        <div className={"col-12"}>
                            <h1 style={{textAlign: "center"}}>Welcome to Kwetter, a twitter clone made by <a
                                href="https://lucurlings.nl" target="_blank">Luc Urlings</a>.</h1>
                            <h3 style={{textAlign: "center"}}>Get started by <Link to={{
                                pathname: "/auth",
                                state: {
                                    isRegistering: false
                                }
                            }}>logging in</Link> or <Link to={{
                                pathname: "/auth",
                                state: {
                                    isRegistering: true
                                }
                            }}>signing up</Link>!</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {user, users};
}

const actionCreators = {
    getUsers: userActions.getAll
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export {connectedHomePage as HomePage};