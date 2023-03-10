
import React from 'react';
import RegisterForm from 'components/forms/RegisterForm';
import { registerUser } from 'actions';
import { Navigate } from 'react-router-dom';

class Register extends React.Component {

  state = {
    shouldRedirect: false
  }

  signUp = (registerData) => {
    registerUser(registerData)
      .then(() => this.setState({shouldRedirect: true}))
      .catch(errors => {
        console.log(errors)})
      }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
     return <Navigate  to='/login'/>
    }
    return (
      <div className="bwm-form">
      <div className="row">
        <div className="col-md-5">
          <h1 className="page-title">Register</h1>
          <RegisterForm onSubmit={this.signUp} />
        </div>
        <div className="col-md-6 ml-auto">
          <div className="image-container">
            <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
            <img src="/images/register-image.jpg" alt="Register an user" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register;