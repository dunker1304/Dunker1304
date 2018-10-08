import React, { Component } from 'react';
import GirlImage from '../Components/GirlImage';
import axios from '../axios';
import NavBar from '../Components/NavBar';
class DetailScreen extends Component {
    state =  {
        
      }
      componentDidMount() {
        axios.get(`/api/images/${this.props.match.params.ImageId}`)
              .then(data => {
                this.setState({image: data.data});
              })   
              .catch(error => {console.log(error)});
      }

    render() {
        return (
            <div>
                <NavBar onSearchChanged = {this.onSearchChanged} onLogin = {this._onLogin} username = {this.state.username}/>
                <div className="main_content container">
                    <div className="row">
                        <div className="col-8 mr-auto ml-auto">
                            {this.state.image ? <GirlImage img={this.state.image}/> : ''}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default DetailScreen;