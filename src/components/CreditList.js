import React, {Component} from 'react';
import Credits from './Credits';
import CreditForm from './CreditForm';
import {Link} from 'react-router-dom';


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
                <h3>Account Balance: {this.props.accountBalance}</h3>
                <Link to="/userProfile">User Profile</Link>
                <CreditForm addNewCreditToCreditList={this.props.addNewCreditToCreditList}/>
                {creditComponents}
            </div>
        )
    }
}

export default CreditList;