import React, { Component } from 'react';
import pwBike from './peeweebike.jpg'

class Peeweebike extends Component {
    render() {
        return (
            <div>
                <h1>Pee Wee's Bike</h1>
                <img src ={pwBike}/>
                <p>Not some crappy other bike</p>
            </div>
        )
    }
}
export default Peeweebike