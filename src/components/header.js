import React, { Component } from 'react'

export class header extends Component {

    // methods
    headerStye = () => {
        return {
            background: '#333',
            color: 'white',
            paddingLeft:'25px',
            paddingTop:'2px',
            paddingBottom:'2px'
        }
    }

    // template
    render() {
        return (
            <div style={this.headerStye()} >
                <h1 style={{fontWeight:'100'}} > My Todo List </h1>
            </div>
        )
    }
}

export default header
