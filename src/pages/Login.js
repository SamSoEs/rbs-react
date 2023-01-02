import React from 'react';
import LoginForm from 'components/forms/LoginForm';
import { loginUser } from 'actions';
import { Navigate } from 'react-router-dom';
class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      errors: []
    }
  }

  signIn = (loginData) => {
    loginUser(loginData)
      .then(token => {
        console.log(token);
        this.setState({shouldRedirect: true});
      })
      .catch(errors => this.setState({errors}))
  }
  render() {
    const { errors, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Navigate to='/' />
    }
    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            <LoginForm onSubmit={this.signIn} />
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
              <img src="/images/login-image.jpg" alt="Login an user" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     data: state.data2
//   }
// } 

export default Login;