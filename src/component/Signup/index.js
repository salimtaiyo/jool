import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registeruser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

    this.props.registeruser(newUser, this.props.history);
  }

  render() {
    return (
      <div className="register">
        <Link to="/"> Home </Link>
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
          <input type="text" placeholder="re-enter password"/>
          <br/>
          <button onClick={this.signupSubmit}> Sign up </button>
        </form>
    </div>
    )
  }
}

Signup.propTypes={
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired 
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {registeruser})( withRouter(Signup));
