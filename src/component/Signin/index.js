import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Signin extends Component {
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
    this.props.loginUser(user);
  }

  inputHandler = (event) => {
    this.setState({[event.target.name] : event.target.value })
  }
  render() {
    return ( 
      <div className="signin">

        {/* Link to Register page */}
        <div className="singin__links">
          <Link to="/signup"> Sign up </Link>
        </div>

        <div className="signin__body">
          <img src="logo.png" className="signin__body--header" alt="logo"/>
          <h4 className="signin__body--sub"> Building product selection platform</h4>
          <br/>
          <br/>

          {/* Login body */}
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Signin);
