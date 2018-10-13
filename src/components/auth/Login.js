import React, { Component } from "react";
import PropTypes from "prop-types";
//import { compose } from "redux";
//import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .catch(err => alert("Login inválido"));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Iniciar sesión
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  value="Iniciar sesión"
                  class="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default firebaseConnect()(Login);
