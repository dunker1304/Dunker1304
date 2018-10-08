import React, {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';
class NavBar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="container">
                    <SearchField onSearchChanged = {this.props.onSearchChanged}/>
                    <div className="col-6">
                        <img className="logo" src={logo}></img>
                    </div>
                    <ProfilePanel onLogin = {this.props.onLogin} username = {this.props.username}/>
                </div>
            </div>
        );
    }
}



export default NavBar;
