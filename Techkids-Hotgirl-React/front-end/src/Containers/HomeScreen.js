import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import axios from '../axios';

import MainContent from '../Components/MainContent';
import GirlImage from '../Components/GirlImage';
class HomeScreen extends Component {
    // state, props
  state =  {
    images: [],
    searchString :"",
    
  }
  componentDidMount() {
    axios.get('/api/images')
          .then(data => {
            console.log(data.data); 
            this.setState({images: data.data});
            
          })   
          .catch(error => {console.log(error)});
  }
  
  onSearchChanged =  text => this.setState({searchString : text});



    render() {
        const displayedImages = this.state.images.filter(
            img => img.title.includes(this.state.searchString) 
              || img.description.includes(this.state.searchString));
        return (
            <div>
                <NavBar onSearchChanged = {this.onSearchChanged} onLogin = {this.props.onLogin} username = {this.props.username}/>
                <MainContent images={displayedImages}/> 
            </div>
        );
    }
}

export default HomeScreen;