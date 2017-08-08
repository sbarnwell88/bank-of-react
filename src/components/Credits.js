import React, {Component} from 'react';

class Credits extends Component {
    render() {
        return(
            <div>
                {this.props.amount}
                {this.props.description}
                {this.props.date}
            </div>
        )
    }
}

export default Credits;