import React, { Component } from 'react'
import './Grid.css'

export default class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    renderElements = () => {
        return this.props.children.map((elem,i) => {
            return (
                <div key={i} className="rmdb-grid-element">
                    {elem}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="rmdb-grid">
                {this.props.header && !this.props.isLoading ? 
                <h1>
                    {this.props.header}
                </h1> : null}
                <div className="rmdb-grid-content">
                    {this.renderElements()}
                </div>
            </div>
        )
    }
}
