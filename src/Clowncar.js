import React, {Component} from 'react';
import clowncar from './clowncar.jpg'

class Clowncar extends Component {
    render() {
        return(
            <div>
                <h1>Clowncar</h1>
                <img src={clowncar}/>
                <p>Model: Model C - for clown</p>
            </div>
        )
    }
}

export default Clowncar