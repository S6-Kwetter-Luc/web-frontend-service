import React from 'react';
import {connect} from "react-redux";
import config from '../config.json'
import {Link} from 'react-router-dom';


class ProfilePage extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.componentDidMount()
            this.setState((state, props) => {
                return {user: null, myProfile: false, follow: false, followers: [], following: []};
            });
        }
    }

    async componentDidMount() {
        console.log('I DID MOUNT')
        //
        if (this.props.match.params.id == null) {
            this.context.router.history.push('/')
        }

        const {authentication} = this.props;
        console.log('authentication object: ', authentication)

        // fetch(`${config.apiUrl}/users/${this.props.match.params.id}`, requestOptions).then(r => console.log(r))
        // fetch(`${config.apiUrl}/users/${authentication.user.id}`, requestOptions).then(r => console.log('response: ', r))

        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }
        console.log('dit werkt')
        let response = await fetch(`${config.ACCOUNT_SERVICE}/account/${this.props.match.params.id}`, requestOptions)
        let body = await response.json()

        let responseFollowing = await fetch(`${config.ACCOUNT_SERVICE}/profile/getfollow?id=${authentication.user.id}&idToFollow=${this.props.match.params.id}`, requestOptions)
        let bodyFollowing = await responseFollowing.json()

        this.setState((state, props) => {
            return {
                user: body,
                myProfile: (this.props.match.params.id === authentication.user.id),
                follow: bodyFollowing
            };
        });

        this.loadFollowing();
        this.loadFollowers();
    }


    constructor(props) {
        super(props);

        console.log("I DID CONSTRUCT")

        this.state = {user: null, myProfile: false, follow: false, followers: [], following: []}
    }

    loadFollowing = async () => {
        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }
        let response = await fetch(`${config.ACCOUNT_SERVICE}/profile/getfollowing/${this.props.match.params.id}`, requestOptions)
        let body = await response.json()


        this.setState((state, props) => {
            return {
                following: body.map((item, key) => {
                    return <tr>
                        <td><Link to={{
                            pathname: "/profile/" + item.id
                        }}>{item.username}</Link></td>
                    </tr>
                })
            };
        });

    }

    loadFollowers = async () => {
        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }
        let response = await fetch(`${config.ACCOUNT_SERVICE}/profile/getfollowers/${this.props.match.params.id}`, requestOptions)
        let body = await response.json()

        console.log(body)
        this.setState((state, props) => {
            return {
                followers: body.map((item, key) => {
                    return <tr>
                        <td><Link to={{
                            pathname: "/profile/" + item.id
                        }}>{item.username}</Link></td>
                    </tr>
                })
            };
        });

    }


    follow = async () => {
        const {authentication} = this.props;

        const requestOptions = {
            method: 'POST',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }

        await fetch(`${config.ACCOUNT_SERVICE}/profile/follow?id=${authentication.user.id}&idToFollow=${this.props.match.params.id}`, requestOptions)

        this.setState((state, props) => {
            return {follow: true};
        });

        this.loadFollowers()
    }

    unfollow = async () => {
        const {authentication} = this.props;

        const requestOptions = {
            method: 'POST',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }

        await fetch(`${config.ACCOUNT_SERVICE}/profile/unfollow?id=${authentication.user.id}&idToFollow=${this.props.match.params.id}`, requestOptions)

        this.setState((state, props) => {
            return {follow: false};
        });

        this.loadFollowers()
    }


    render() {

        return (
            <div>
                {/*<div>{authentication.user.name}</div>*/}

                {
                    (this.state.user === null)
                        ? <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        : <div>
                            {
                                this.state.myProfile
                                    ? <>
                                        <button type="button" className="btn btn-primary">Edit your profile</button>
                                    </>
                                    : <>
                                        {
                                            this.state.follow
                                                ? <>
                                                    <button type="button" className="btn btn-danger"
                                                            onClick={this.unfollow}>Unfollow this user
                                                    </button>
                                                </>
                                                : <>
                                                    <button type="button" className="btn btn-primary" onClick={this.follow}>Follow
                                                        this user
                                                    </button>
                                                </>
                                        }
                                    </>

                            }
                            <div>
                                <div className="jumbotron">
                                    <h2 className="display-4"><span
                                        className="text-muted">Welcome </span> {this.state.user.name}!</h2>
                                    <p><span className="text-muted">Username </span>{this.state.user.username}</p>
                                    <p><span className="text-muted">Email </span>{this.state.user.email}</p>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4 className="textColor">Kwets</h4>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h4 className="textColor">Followers</h4>
                                                <div>

                                                    {
                                                        this.state.followers !== []
                                                            ? <table className="table table-borderless">
                                                                <tbody>
                                                                {this.state.followers}
                                                                </tbody>
                                                            </table>
                                                            : <div className="spinner-border" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <h4 className="textColor">Following</h4>
                                                <div>
                                                    {
                                                        this.state.following !== []
                                                            ? <table className="table table-borderless">
                                                                <tbody>
                                                                {this.state.following}
                                                                </tbody>
                                                            </table>
                                                            : <div className="spinner-border" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

function mapState(state) {
    const {authentication} = state;
    return {authentication};
}

const actionCreators = {}

const connectProfilePage = connect(mapState, actionCreators)(ProfilePage);
export {connectProfilePage as ProfilePage}


