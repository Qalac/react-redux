import React from 'react';
import './box.css';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleSubtract() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div className="box">
                <div className="counter">
                    COUNTER
                </div>
                ------------------------------------
                <div>
                    <button className="add" onClick={this.handleAdd}>+</button>
                    <span className="count"> {this.state.count} </span>
                    <button className="subtract" onClick={this.handleSubtract}>-</button>
                </div>
            </div>
        );
    };
};

export default Box;