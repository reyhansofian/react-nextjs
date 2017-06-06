import React, { Component } from 'react';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reg_usern: '',
      reg_email: '',
      reg_paswd: '',
      reg_paswd_rep: '',
      err: false,
      validated: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(`value is > ${this.state.reg_paswd}`);
    console.log(`value is > ${this.state.reg_paswd_rep}`);
  }
  onSubmit() {
    if (this.state.reg_paswd != this.state.reg_paswd_rep) {
      alert('password did not match!');
    } else {
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.req_email,
          password: this.state.password,
        }),
      })
       .then((response) => {
         if (response.status >= 400) {
           throw new Error('Bad response from server');
         }
         return response.json();
       })
       .then((json) => {
         if (json.status == 'success') {
           alert('success boss');
         } else {
           alert('fail boss');
         }
       });
    }
  }

  render() {
    const { reg_usern, reg_email, reg_paswd, reg_paswd_rep, validated } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user" /></span>
                    <input type="text" className="form-control" name="reg_usern" value={reg_usern} onChange={this.onChange} placeholder="Username" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" name="reg_email" value={reg_email} onChange={this.onChange} placeholder="Email" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-lock" /></span>
                    <input type="password" className="form-control" name="reg_paswd" value={reg_paswd} onChange={this.onChange} placeholder="Password" />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock" /></span>
                    <input type="password" className="form-control" name="reg_paswd_rep" value={reg_paswd_rep} onChange={this.onChange} placeholder="Repeat password" />
                  </div>
                  <button type="button" className="btn btn-block btn-success" onClick={this.onSubmit}>Create Account</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
