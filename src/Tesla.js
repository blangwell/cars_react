import React, { Component } from 'react';
import modelY from './model-y-crash.jpg'

class Tesla extends Component {
    render() {
        return (
            <div>
                <h1>Tesla</h1>
                <img src={modelY} alt="Model Y Photo" style={{width: '400px'}}/>
                <p>Model: Model Y</p>
            </div>
        )
    }
}

export default Tesla