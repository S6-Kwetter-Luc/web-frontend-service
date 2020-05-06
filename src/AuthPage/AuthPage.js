import React, {Component} from 'react';
import Particles from "react-particles-js";
import {particlesConfig} from "../particlesJsConfig";
import {connect} from "react-redux";
import {userActions} from "../_actions";
import {LoginComponent, RegisterComponent} from "../_components/auth";

export class AuthPage extends Component {

    componentWillReceiveProps(nextProps){

        console.log('componentWillReceiveProps: ', nextProps)
        this.setState(prevState => ({
            isRegistering: nextProps.location.state.isRegistering
        }))
    }

    constructor(props) {
        super(props);

        this.state = {
            isRegistering: false,
            user: {
                Name: '',
                lastName: '',
                Email: '',
                Password: ''
            },
            submitted: false
        };

        if (props.location.state.isRegistering) {
            // let newState = { ...this.state };
            // newState.isRegistering = props.location.state.isRegistering
            //
            // this.setState(newState)

            this.setState(prevState => ({
                isRegistering: props.location.state.isRegistering
            }))


            // isRegistering = props.location.state.isRegistering
        }


        // console.log('state', state)
        // console.log('this.state', this.state)
        // console.log('props', props.location.state.isRegistering);
        // console.log('this.props', this.props)

        // this.registerHandleChange = this.registerHandleChange.bind(this);
        // this.registerHandleSubmit = this.registerHandleSubmit.bind(this);
        // this.loginHandleChange = this.loginHandleChange.bind(this);
        // this.loginHandleSubmit = this.loginHandleSubmit.bind(this);

        this.handleFlipRegister = this.handleFlipRegister.bind(this);
    }

    // registerHandleChange(event) {
    //     const {name, value} = event.target;
    //     const {user} = this.state;
    //     this.setState({
    //         user: {
    //             ...user,
    //             [name]: value
    //         }
    //     });
    // }
    //
    // registerHandleSubmit(event) {
    //     event.preventDefault();
    //
    //     this.setState({submitted: true});
    //     const {user} = this.state;
    //     if (user.Name && user.lastName && user.Email && user.Password) {
    //         this.props.register(user);
    //     }
    // }
    //
    // loginHandleChange(e) {
    //     const {name, value} = e.target;
    //     this.setState({[name]: value});
    // }
    //
    // loginHandleSubmit(e) {
    //     e.preventDefault();
    //
    //     this.setState({submitted: true});
    //     const {Email, Password} = this.state;
    //     if (Email && Password) {
    //         this.props.login(Email, Password);
    //     }
    // }

    handleFlipRegister() {
        console.log('done dud');
        this.setState(prevState => ({
            isRegistering: !prevState.isRegistering
        }))
        // this.forceUpdate();

        // isRegistering = !isRegistering;
    }



    render() {

        const {registering} = this.props;
        const {user, submitted} = this.state;

        const {loggingIn} = this.props;
        const {Email, Password} = this.state;

        return (
            <div>
                <div>
                    <Particles className="particles" params={particlesConfig}/>
                </div>

                {this.state.isRegistering
                    ? <RegisterComponent onFlipRegister={this.handleFlipRegister}/>
                    : <LoginComponent onFlipRegister={this.handleFlipRegister}/>
                }
            </div>
        )
    }
}

// function mapState(state) {
//     const {loggingIn} = state.authentication;
//     const {registering} = state.registration;
//     return {loggingIn, registering};
// }
//
// const actionCreators = {
//     login: userActions.login,
//     logout: userActions.logout,
//     register: userActions.register
// };

// const connectedAuthPage = connect(mapState, actionCreators)(AuthPage);
// export default AuthPage;