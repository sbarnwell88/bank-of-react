import React, {Component} from 'react';

class Credits extends Component {
    render() {
        return(
            <div>
                <p>{this.props.amount}</p>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
                <hr/>
            </div>
        )
    }
}

export default Credits;