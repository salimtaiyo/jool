import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Signin extends Component {
  state ={
    email: null,
    password: null
  }

  signinHandler = (event) => {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:5000/login', user)
    .then(res => ( console.log(res.data.token)))
    .catch(err => console.log(err));
  }

  inputHandler = (event) => {
    this.setState({[event.target.name] : event.target.value })
  }
  render() {
    return ( 
      <div className="signin">
        <div className="singin__links">
          <Link to="/signup"> Sign up </Link>
        </div>

        <div className="signin__body">
          <h1 className="signin__body--header"> joOle </h1>
          <h4 className="signin__body--sub"> Building product selection platform</h4>
          <br/>
          <br/>

          <form>
            <input type="email" name="email" onChange={this.inputHandler} placeholder="email"/>
            <br/>
            <br/>
            <input type="password" name="password" onChange={this.inputHandler} placeholder="password"/>
            <br/>
            <br/>
            <br/>
            <button className="signin__body--btn" onClick={this.signinHandler}> <Link className="signin__body--btn" to="/search"> Log In </Link> </button> 
          </form>

        </div>
      
    </div>
    )
  }
}

export default Signin
