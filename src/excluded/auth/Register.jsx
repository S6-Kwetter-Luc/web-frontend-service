import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../../_actions';

import Particles from "react-particles-js";
import {particlesConfig} from "../../particlesJsConfig";
class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                Name: '',
                lastName: '',
                Email: '',
                Password: ''
            },
            submitted: false
        };

        this.registerHandleChange = this.registerHandleChange.bind(this);
        this.registerHandleSubmit = this.registerHandleSubmit.bind(this);
    }

    registerHandleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    registerHandleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.Name && user.lastName && user.Email && user.Password) {
            this.props.register(user);
        }
    }




    render() {

        const {registering} = this.props;
        const {user, submitted} = this.state;
        return (<div className="col-md-6 col-md-offset-3">
            <h2>Register</h2>
            <form name="form" onSubmit={this.registerHandleSubmit}>
                <div className={'form-group' + (submitted && !user.Name ? ' has-error' : '')}>
                    <label htmlFor="Name">First Name</label>
                    <input type="text" className="form-control" name="Name" value={user.Name}
                           onChange={this.registerHandleChange}/>
                    {submitted && !user.Name &&
                    <div className="help-block">First Name is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.Email ? ' has-error' : '')}>
                    <label htmlFor="Email">Email</label>
                    <input type="text" className="form-control" name="Email" value={user.Email}
                           onChange={this.registerHandleChange}/>
                    {submitted && !user.Email &&
                    <div className="help-block">Email is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !user.Password ? ' has-error' : '')}>
                    <label htmlFor="Password">Password</label>
                    <input type="Password" className="form-control" name="Password" value={user.Password}
                           onChange={this.registerHandleChange}/>
                    {submitted && !user.Password &&
                    <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                    {registering &&
                    <img
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                    }
                    <button style={{marginLeft: 10}} className={"btn btn-secondary"} onClick={this.props.onFlipRegister}>Login</button>
                </div>
            </form>
        </div>);
    }
}

function mapState(state) {
    const {registering} = state.registration;
    return {registering};
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterComponent = connect(mapState, actionCreators)(RegisterComponent);
export {connectedRegisterComponent as RegisterComponent};