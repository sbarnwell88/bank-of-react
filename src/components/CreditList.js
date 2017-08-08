import React, {Component} from 'react';
import Credits from './Credits';


class CreditList extends Component {
    render() {

        const credits = this.props.credits;

        const creditComponents = credits.map((credit, index) => {
            return <Credits
            description={credit.description}
            amount={credit.amount}
            date={credit.date}
            key={index}
            />
        })
        return(
            <div>
                <h1>Credits</h1>
                {creditComponents}
            </div>
        )
    }
}

export default CreditList;