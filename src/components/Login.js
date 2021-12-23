import React from 'react';
import { login } from '../repository';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{

  constructor() {
    super();
    this.state = { name: '', password: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/Shopcart')
      .catch(err => alert(err));
  }

  render() {
     return (
       
      <div className="container" >
      <hr/>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Log in </h3>
            </div>
            <div className="panel-body" >
              <form onSubmit={this.submitLogin}>
                <div className="form-group">
               
                  <input type="text" className="form-control"  placeholder="UserName" name="name" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                 
                  <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange}/>
                </div>
                <div>
                <div className='row'>
                <button type="submit" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" style={{ marginRight: "10px" }}>Submit</button>
                <br></br>
                <Link to="/Shopcart">
                <button className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">Back</button>
                </Link>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
