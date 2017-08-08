import React, { Component } from 'react';

class DebitForm extends Component {
    constructor () {
        super();
 
        this.state = {
            newDebit: {}
     }
   }
 
   _handleNewDebitChange = (event) => {
     const attributeName = event.target.name;
     const attributeValue = event.target.value;
 
     const newDebit = {...this.state.newDebit};
     newDebit[attributeName] = attributeValue;
 
     this.setState({newDebit})
   };

   _addNewDebit = (event) => {
 	event.preventDefault();
 	
 	this.props.addNewDebitToDebitsList(this.state.newDebit);
 };
    render() {
        return (
            <div>
            <form onSubmit={this._addNewDebit}>
             <div><input name="description" type="text" placeholder="Description" onChange={this._handleNewDebitChange}/></div>
             <div><input name="amount" type="number" placeholder="amount" onChange={this._handleNewDebitChange}/></div>
             <div><input type="submit" value="Create New Debit"/></div>
           </form>
            </div>
        )
    }
}

export default DebitForm;