import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {kweet:""}
    }

    onKweetContentChange = (event) => {
        console.log(event.target)
        this.setState({kweet:event.target.value})
    }

    handleKweet = () => {

    }


    // https://www.npmjs.com/package/react-textarea-with-suggest
    render() {
        const {authentication} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom: 50}}>
                <div className="container">
                    <Link className="navbar-brand" to="/">Kwetter</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        {
                            authentication.loggedIn
                                ? <>
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Feed</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Settings</a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item" style={{marginRight: "20px"}}>
                                            <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal"
                                                    data-target="#exampleModal">Write a kweet
                                            </button>
                                        </li>
                                        <li className="nav-item" style={{marginRight: "20px"}}>
                                        <span className="navbar-text"> Welcome <span
                                            style={{color: "white"}}><Link to={{
                                            pathname: "/profile/" + authentication.user.id
                                        }}>{authentication.user.name}</Link></span></span>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-light my-2 my-sm-0"
                                               href="/login">Logout</a>
                                        </li>

                                    </ul>
                                    {/*Modal*/}
                                    <div>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">New Kweet!</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="message-text" className="col-form-label">Kweet (max 140 characters):</label>
                                                                <textarea maxlength='140' className="form-control" id="message-text" onChange={this.onKweetContentChange} value={this.state.kweet}/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                                        </button>
                                                        <button type="button" className="btn btn-primary">Send message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <ul className="navbar-nav mr-auto">

                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li style={{marginRight: "20px"}}>
                                            <Link className="btn btn-outline-light my-2 my-sm-0"
                                                  to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link className="btn btn-outline-light my-2 my-sm-0" to="/register">Sign
                                                up!</Link>
                                        </li>
                                    </ul>
                                </>
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