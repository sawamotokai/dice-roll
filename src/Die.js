import React, { Component } from 'react'
 import './Die.css'

class Die extends Component {

    
    render() {
        var props = this.props;

        return (
            <div>
                <i class={`${props.rolling && "shaking"} Die fas fa-dice-${props.face}`}></i>
            </div>
        );
    }
}

export default Die;