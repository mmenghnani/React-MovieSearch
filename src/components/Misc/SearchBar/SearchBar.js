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
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        },500);
        console.log(this.state.value)
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-content">
                    <FontAwesome className="search" name="search" />
                    <input type="text" className="searchbar-input" placeholder="Search" 
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}
