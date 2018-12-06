import React, { Component } from 'react'
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      lastname:null,
      password:null,
      email:null,
    }
    this.path = 'http://localhost:5000';
  }
  
  signupHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  signupSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      lastname: this.state.lastname
    }
    axios.post(`http://localhost:5000/signup`, newUser)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <h1> Signup </h1>

      <form>
        <input type="text" placeholder="name" name="name" onChange={this.signupHandler}/>
        <br/>
        <input type="text" placeholder="last name" name="lastname" onChange={this.signupHandler}/>
        <br/>
        <input type="text" placeholder="email" name="email" onChange={this.signupHandler}/>
        <br/>
        <input type="text" placeholder="password" name="password" onChange={this.signupHandler}/>
        <br/>
        <input type="text" placeholder="password"/>
        <br/>
        <button onClick={this.signupSubmit}> Sign up </button>
      </form>
  
    </div>
    )
  }
}

export default Signup
