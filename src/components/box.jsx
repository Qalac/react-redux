import React from 'react';
import Number from './number';
import { connect } from 'react-redux';
import { increaseCount } from '../actions/increment';
import { reduceCount } from '../actions/reduce'
import './box.css';

function mapStateToProps(store) {
    return {
        count: store.count
    }
}


function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch(increaseCount()),
        reduceCount: () => dispatch(reduceCount()),
        dispatch
    }
}

class Box extends React.Component {

    render() {
        return(
            <div className="box">
                <div className="counter">
                    Counter
                </div><p />
                <div>
                    <button className="add" onClick={this.props.increaseCount}>+</button>
                    <Number nvalue={this.props.count} />
                    <button className="subtract" onClick={this.props.reduceCount}>-</button>
                </div>
            </div>
        );
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Box)