import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './axios';
import HomeScreen from './Containers/HomeScreen';
import DetailScreen from './Containers/DetailScreen';
import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component {
    state = {};

  _onLogin = () =>{
    axios.post("/api/auth", {
        username: "admin",
        password: '123456'
    })
    .then(response => this.setState({
      username: response.data.username,
      id: response.data.id
    }))
    .catch(error => console.log(error));
  }

  render() {
    
    
    return (
      <BrowserRouter>
      <div className="App">
          <Route exact path="/" render ={ props =>{
              return <HomeScreen {...props} username = {this.state.username} onLogin = {this._onLogin}/>
          }}/>
              
          <Route path="/images/:ImageId" render ={ props =>{
              return <DetailScreen {...props} username = {this.state.username} onLogin = {this._onLogin}/>
          }}/>   
      </div>
      </BrowserRouter>
    );  
  }
}

export default App;
