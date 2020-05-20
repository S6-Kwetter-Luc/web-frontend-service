import React from 'react';
import {connect} from "react-redux";
import config from '../config.json'
import { authHeader } from '../_helpers';



class ProfilePage extends React.Component {

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
         let response = await fetch(`${config.apiUrl}/users/${this.props.match.params.id}`, requestOptions)
         let body = await response.text()
         // this.setState(user: JSON.parse(body));

         this.setState((state, props) => {
             return {user: JSON.parse(body)};
         });

    }

    constructor(props) {
        super(props);

        console.log("I DID CONSTRUCT")

        this.state = {user: null}


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
                        <div className="jumbotron">
                            <h2 className="display-4"><span className="text-muted">Welcome </span> {this.state.user.name}!</h2>
                            <p><span className="text-muted">Username </span>{this.state.user.username}</p>
                            <p><span className="text-muted">Email </span>{this.state.user.email}</p>
                        </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className="textColor">Kwets</h4>
                                </div>
                                <div className="col-sm-6"></div>
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


