import React from 'react';
import config from '../config.json'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authHeader, authHeaderAndAdditionalHeaders} from '../_helpers';


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

        this.parseUsers(body.profile.followers, 'followers');
        this.parseUsers(body.profile.following, 'following');

        this.loadRecentKwets()
    }


    constructor(props) {
        super(props);

        console.log("I DID CONSTRUCT")

        this.state = {
            user: null,
            myProfile: false,
            follow: false,
            followers: [],
            following: [],
            kweets: [],
            isEditing: false,
            tempUsername: ""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    //Parses lost of following or followers
    parseUsers = async (body, listName) => {
        this.setState((state, props) => {
            return {
                [listName]: body.map((item, key) => {
                    return <tr>
                        <td><Link to={{
                            pathname: "/profile/" + item.id
                        }}>@{item.username}</Link></td>
                    </tr>
                })
            };
        });

    }

    loadRecentKwets = async () => {
        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            headers: authHeader()
        }

        let response = await fetch(`${config.KWET_SERVICE}/kweet/${this.props.match.params.id}`, requestOptions)
        if (response.status !== 200) {
            throw new Error(JSON.stringify(response))
        }
        let body = await response.json()
        let html = body.map((item, key) => {
            return <>
                <div className="card" key={item.id} style={{marginTop: '20px'}}>
                    <div className="card-body">
                        <p className="card-text">{item.content}</p>
                        <p className="card-text"><small className="text-muted">Written
                            on {new Date(item.dateTime).toLocaleString()} by {item.writer.username}</small></p>
                        <button type="button" className="btn btn-success"><i className="fa fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn btn-danger"> <i className="fa fa-thumbs-down"></i> Unlike</button>
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

    loadFollowing = async () => {
        const requestOptions = {
            method: 'GET',
            // mode: "cors",
            // cache: "default"
            // headers: authHeader()
        }
        let response = await fetch(`${config.ACCOUNT_SERVICE}/profile/getfollowing/${this.props.match.params.id}`, requestOptions)
        let body = await response.json()

        this.parseUsers(body, 'following')
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

        this.parseUsers(body, 'followers')
    }

    follow = async () => {
        const {authentication} = this.props;

        const requestOptions = {
            method: 'POST',
            // mode: "cors",
            // cache: "default"
            headers: authHeader()
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
            headers: authHeader()
        }

        await fetch(`${config.ACCOUNT_SERVICE}/profile/unfollow?id=${authentication.user.id}&idToFollow=${this.props.match.params.id}`, requestOptions)

        this.setState((state, props) => {
            return {follow: false};
        });

        this.loadFollowers()
    }

    enableEditMode = () => {
        this.setState((state, props) => {
            return {isEditing: true, tempUsername: this.state.user.profile.username};
        });
    }

    disableEditMode = async () => {
        this.setState((state, props) => {
            return {isEditing: false};
        });

        if (this.state.tempUsername.length === 0) return
        if (this.state.tempUsername === this.state.user.profile.username) return;

        //send to server
        const requestOptions = {
            method: 'PUT',
            // mode: "cors",
            // cache: "default"
            body: JSON.stringify({Username: this.state.tempUsername}),
            headers: authHeaderAndAdditionalHeaders()
        }
        await fetch(`${config.ACCOUNT_SERVICE}/account/${this.state.user.id}`, requestOptions)


        const {user} = this.state;
        const {profile} = user;
        console.log(user)
        this.setState((state, props) => {
            return {
                user: {
                    ...user,
                    profile: {
                        ...profile,
                        username: this.state.tempUsername
                    }
                }
            };
        });

        let json = JSON.parse(localStorage.getItem("user"));
        json.profile.username = this.state.tempUsername
        localStorage.setItem("user", JSON.stringify(json))

        this.loadRecentKwets()
    }

    handleUsernameChange(event) {
        const {name, value} = event.target;
        this.setState((state, props) => {
            return {[name]: value.trim()};
        });
    }


    render() {
        return (
            <div>
                {
                    (this.state.user === null)
                        ? <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        : <div>
                            {
                                this.state.myProfile
                                    ? <div className="float-right" style={{margin: '10px'}}>
                                        {
                                            !this.state.isEditing
                                                ? <button type="button" className="btn btn-primary"
                                                          onClick={this.enableEditMode}>Edit your profile</button>
                                                : <button type="button" className="btn btn-primary"
                                                          onClick={this.disableEditMode}>Save the changes</button>
                                        }
                                    </div>
                                    : <>
                                        {
                                            this.state.follow
                                                ? <div className="float-right" style={{margin: '10px'}}>
                                                    <button type="button" className="btn btn-danger"
                                                            onClick={this.unfollow}>Unfollow this user
                                                    </button>
                                                </div>
                                                : <div className="float-right" style={{margin: '10px'}}>
                                                    <button type="button" className="btn btn-primary" onClick={this.follow}>Follow
                                                        this user
                                                    </button>
                                                </div>
                                        }
                                    </>
                            }
                            <div>
                                <div className="jumbotron">
                                    <h2 className="display-4"><span
                                        className="text-muted">Welcome </span> {this.state.user.name}!</h2>
                                    <p>
                                        {
                                            this.state.isEditing
                                                ? <><span
                                                    className="text-muted">Username @<input type="text"
                                                                                            style={{maxWidth: '400px'}}
                                                                                            name="tempUsername"
                                                                                            value={this.state.tempUsername}
                                                                                            onChange={this.handleUsernameChange}/></span></>

                                                : <><span
                                                    className="text-muted">Username </span>@{this.state.user.profile.username}</>
                                        }


                                    </p>
                                    <p><span className="text-muted">Email </span>{this.state.user.email}</p>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4 className="textColor">Kweets</h4>
                                        {
                                            this.state.kweets !== []
                                                ? <>
                                                    {this.state.kweets}
                                                </>
                                                : <p>No kweets :(</p>
                                        }
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {
                                                    this.state.followers !== []
                                                        ? <>
                                                            <h4 className="textColor">Followers
                                                                <span
                                                                    className="badge badge-secondary"> {this.state.followers.length}</span>
                                                            </h4>
                                                            <div>
                                                                <table className="table table-borderless">
                                                                    <tbody>
                                                                    {this.state.followers}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </>
                                                        : <p>No followers</p>
                                                }
                                            </div>
                                            <div className="col-sm-6">
                                                {
                                                    this.state.following !== []
                                                        ? <>
                                                            <h4 className="textColor">Following
                                                                <span
                                                                    className="badge badge-secondary">{this.state.following.length}</span>
                                                            </h4>
                                                            <div>
                                                                <table className="table table-borderless">
                                                                    <tbody>
                                                                    {this.state.following}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </>
                                                        : <p>Not following anyone</p>
                                                }
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


