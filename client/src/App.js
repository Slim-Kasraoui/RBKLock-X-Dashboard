import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './scss/style.scss';
import { func } from 'prop-types';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      staff: {},
      logged : false
    }
  }


  logIn = () => {
    console.log('innn');
    this.setState({logged : true})
  }

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          {/* {this.renderView()} */}
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login logIn={this.logIn} {...props} />} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            {!this.state.logged && <Redirect from="/" to="/login" />}
            {this.state.logged && <Route path="/" name="Home" render={props => <TheLayout logged={this.state.isLogged} {...props} />} />}
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
