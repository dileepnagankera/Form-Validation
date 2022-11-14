import React, { Component } from "react";

class Form extends Component {
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }
  render() {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(event) => this.handleUserInput(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(event) => this.handleUserInput(event)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}
export default Form;
