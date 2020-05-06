import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import Particles from "react-particles-js";
import {particlesConfig} from "../particlesJsConfig";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            Email: '',
            Password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { Email, Password } = this.state;
        if (Email && Password) {
            this.props.login(Email, Password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { Email, Password, submitted } = this.state;
        return (
            <div>

            </div>
            // <div className="col-md-6 col-md-offset-3">
            //     <div>
            //         <Particles className="particles" params={particlesConfig} />
            //     </div>
            //     <h2>Login</h2>
            //     <form name="form" onSubmit={this.handleSubmit}>
            //         <div className={'form-group' + (submitted && !Email ? ' has-error' : '')}>
            //             <label htmlFor="Email">Email</label>
            //             <input type="text" className="form-control" name="Email" value={Email} onChange={this.handleChange} />
            //             {submitted && !Email &&
            //             <div className="help-block">Email is required</div>
            //             }
            //         </div>
            //         <div className={'form-group' + (submitted && !Password ? ' has-error' : '')}>
            //             <label htmlFor="Password">Password</label>
            //             <input type="Password" className="form-control" name="Password" value={Password} onChange={this.handleChange} />
            //             {submitted && !Password &&
            //             <div className="help-block">Password is required</div>
            //             }
            //         </div>
            //         <div className="form-group">
            //             <button className="btn btn-primary">Login</button>
            //             {loggingIn &&
            //             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            //             }
            //             <Link to="/register" className="btn btn-link">Register</Link>
            //         </div>
            //     </form>
            // </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
