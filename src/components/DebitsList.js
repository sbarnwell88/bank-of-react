import React, { Component } from 'react';
import Debits from './Debits';
import DebitForm from './DebitForm';
import {Link} from 'react-router-dom';


class DebitList extends Component {
    render() {

        const debits = this.props.debits;

        const debitsComponents = debits.map((debit, index) => {
            return <Debits
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            key={index}
            />
        })

        return (
            <div>
                <h1>Debits</h1>
                <h3>Account Balance: {this.props.accountBalance}</h3>
                <Link to="/userProfile">User Profile</Link>
                <DebitForm addNewDebitToDebitsList={this.props.addNewDebitToDebitsList}/>
                {debitsComponents}
            </div>
        )
    }
}

export default DebitList;