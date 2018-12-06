import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// component imports
import Signin from './component/Signin';
import Signup from './component/Signup';
import Search from './component/Search.js';
import ProductPage from './component/Product/ProductPage';

class App extends Component {

  state={
    url:''
  }
  imageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ url: reader.result})
    };
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/search" component={Search}/>
          <Route path="/product" component={ProductPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

// <input type="file" onChange={this.imageHandler}/>
//         {this.state.url && <img src={this.state.url} className="main__image" alt="profile"/>}