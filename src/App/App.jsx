import React from 'react';
import {Redirect, Route, Router, Switch, useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {NavBar, PrivateRoute} from '../_components';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {RegisterPage} from '../RegisterPage';
import {AuthPage} from "../AuthPage";
import {ProfilePage} from '../ProfilePage';


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });


    }

    render() {
        // const {alert} = this.props;
        return (
            <div>
                <Router history={history}>
                    <NavBar/>
                    <div className="container">

                        <Switch>

                            {/*<PrivateRoute exact path="/profile" component={ProfilePage}/>*/}
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Route path="/auth" component={AuthPage}/>
                            <Route path="/" exact component={HomePage}/>
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </div>
                </Router>

            </div>
        )
            ;
    }
}


function mapState(state) {
    const {alert} = state;
    return {alert};
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};