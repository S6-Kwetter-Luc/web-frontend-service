import React from 'react';
import config from '../config.json'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userActions} from '../_actions';
import Particles from "react-particles-js";
import {particlesConfig} from "../particlesJsConfig";
import {authHeaderAndAdditionalHeaders} from "../_helpers";

class GeneralFeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: <></>, kweets: []}
    }

    componentDidMount() {
        this.loadKweets()
    }

    loadKweets = async () => {
        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }

        let response = await fetch(`${config.KWET_SERVICE}/Kweet`, requestOptions)
        if (response.status !== 200) {
            this.setState((state, props) => {
                return {
                    error: <>
                        <div className="alert alert-danger" role="alert">
                            Something went wrong during the loading of the kweets
                        </div>
                    </>
                }
            })
        }
        let body = await response.json()

        let user = JSON.parse(localStorage.getItem("user"));

        let html = body.map((item, key) => {
            let likeByMe = false;

            for (let i = 0; i < item.likes.length; i++) {
                if (item.likes[i].id === user.id) likeByMe = true;
            }

            return <>
                <div className="offset-3 col-6" key={item.id}>
                    <div className="card" identifier={item.id} style={{marginTop: '20px'}}>
                        <div className="card-body">
                            <p className="card-text">{item.content}</p>
                            <p className="card-text"><small className="text-muted">Written
                                on {new Date(item.dateTime).toLocaleString()} by <Link
                                    to={{pathname: '/profile/' + item.writer.id}}>{item.writer.username}</Link></small>
                            </p>

                            {
                                likeByMe
                                    ? <button type="button" className="btn btn-success" onClick={() => {
                                        this.unlikeKweet(item.id)
                                    }}>{item.likes.length} <i
                                        className="fa fa-thumbs-down"></i> Unlike
                                    </button>
                                    : <button type="button" className="btn btn-primary" onClick={() => {
                                        this.likeKweet(item.id)
                                    }}>{item.likes.length} <i
                                        className="fa fa-thumbs-up"></i> Like
                                    </button>
                            }

                        </div>
                    </div>
                </div>
            </>
        })

        this.setState((state, props) => {
            return {
                kweets: html
            }
        })
    }

    likeKweet = async (kweetId) => {
        let user = JSON.parse(localStorage.getItem("user"));

        const requestOptions = {
            method: 'POST',
            // mode: "cors",
            // cache: "default"
            body: JSON.stringify({
                "Username": user.profile.username,
                "UserId": user.id
            }),
            headers: authHeaderAndAdditionalHeaders()
        }

        let response = await fetch(`${config.KWET_SERVICE}/kweet/like/${kweetId}`, requestOptions)
        if (response.status != 200) {
            this.setState((state, props) => {
                return {
                    error: <>
                        <div className="alert alert-danger" role="alert">
                            Something went wrong during the loading of the kweets
                        </div>
                    </>
                }
            })
        }

        this.loadKweets()
    }

    unlikeKweet = async (kweetId) => {
        let user = JSON.parse(localStorage.getItem("user"));

        const requestOptions = {
            method: 'POST',
            // mode: "cors",
            // cache: "default"
            body: JSON.stringify({
                "Username": user.profile.username,
                "UserId": user.id
            }),
            headers: authHeaderAndAdditionalHeaders()
        }

        let response = await fetch(`${config.KWET_SERVICE}/Kweet/unlike/${kweetId}`, requestOptions)
        if (response.status != 200) {
            this.setState((state, props) => {
                return {
                    error: <>
                        <div className="alert alert-danger" role="alert">
                            Something went wrong during the loading of the kweets
                        </div>
                    </>
                }
            })
        }

        this.loadKweets()
    }

    render() {
        return (
            <div>
                <div>
                    <Particles className="particles" params={particlesConfig}/>
                </div>
                <div>
                    <h3>Explore Kweeters</h3>
                    {this.state.error}
                    <div className="row">
                        {this.state.kweets}
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

const connectedGeneralFeedPage = connect(mapState, actionCreators)(GeneralFeedPage);
export {connectedGeneralFeedPage as GeneralFeedPage};