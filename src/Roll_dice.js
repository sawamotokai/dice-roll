import React, { Component } from 'react'
import Die from './Die';
import './Roll_dice.css';

class Roll_dice extends Component {
    static defaultProps = {
        faces : ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super();
        this.state = { die_num_1: 'one', die_num_2: 'one', rolling: false };
        this.roll = this.roll.bind(this);
    }

    roll() {
        const new_die_1 = this.props.faces[Math.floor(Math.random() * 6)];
        const new_die_2 = this.props.faces[Math.floor(Math.random() * 6)];
        this.setState({ die_num_1: new_die_1, die_num_2: new_die_2 , rolling:true});

        // wait one second 
        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000);
    }

    render() {
        return (
            <div className="Roll_dice">
                <div className="Roll_dice-container">
                    <Die face={this.state.die_num_1} rolling={this.state.rolling} />
                    <Die face={this.state.die_num_2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling?"Rolling..." : "Roll Dice!"}
                </button>

            </div>
        );
    }
}

export default Roll_dice;