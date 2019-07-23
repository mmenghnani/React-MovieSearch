import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation-content">
                    <Link to="/"> 
                        <p>Home /</p>
                        <p>{this.props.movie}</p>
                    </Link>
                </div>
            </div>
        )
    }
}
