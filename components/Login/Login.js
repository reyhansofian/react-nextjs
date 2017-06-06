import React, { Component } from 'react';


class Login extends Component {

  constructor(props) {
      super(props);

      this.state = {
         username: '',
         password: ''
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
   };

  onSubmit(e){
   fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
   .then(function(response){
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
   })
   .then(function(json){
      if(json.status == 'success'){
        alert('success boss');
      }
      else{
        alert('fail boss');
      }
   })
  }

   onChange(e){
      this.setState({ [e.target.name]: e.target.value });
      console.log('username > '+ this.state.username);
      console.log('password > '+ this.state.password);
   }



  render() {
    const { username, password } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} placeholder="Username"/>
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password"/>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-4" onClick={this.onSubmit}>Login</button>
                      </div>
                      <div className="col-6 text-right">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
