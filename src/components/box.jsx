import React from 'react';
import './box.css';

class Box extends React.Component {
    render() {
        return(
            <div className="box">
                <div className="counter">
                    COUNTER
                </div>
                ------------------------------------
                <div>
                    <button className="add">+</button>
                    <span className="count"> 2 </span>
                    <button className="subtract">-</button>
                </div>
            </div>
        );
    };
};

export default Box;