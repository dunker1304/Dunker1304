import React, { Component } from 'react';

class SearchField extends Component {
    handleTextSearch = event => this.props.onSearchChanged(event.target.value);
    render() {
        return (
            <form className="col-3">
                <input onChange={this.handleTextSearch} className="form-control" type='text' placeholder='Search'></input>
            </form>
        );
    }
}

export default SearchField;