import React, { Component } from 'react';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : ''
        }
    }

    doSearch = event => {
        this.setState({
            value : event.target.value
        })
        this.props.callback(this.state.value)
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-content">
                    <FontAwesome className="search" name="search" />
                    <input type="text" className="searchbar-input" placeholder="Enter the movie name" 
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}
