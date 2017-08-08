import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import DebitsList from './components/DebitsList';
import CreditList from './components/CreditList';

class App extends Component {

  constructor () {
    super();

    this.state = {
      currentUser: {
        userName: 'ejonelunas',
        memberSince: 1995
      },
      credits: [],
      debits: [],
    }
  }

  _accountDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then((res) => {
        const debits = res.data;
        this.setState({debits})
      })
  }

  _accountCredits = () => {
    axios.get('http://localhost:4000/credits')
    .then((res) => {
      const credits = res.data;
      this.setState({credits})
    })
  }

  _calculateAccountBalance = () => {

   const credits = this.state.credits;
   const totalCredits = credits.reduce((totalCredits, credit) => {
     return totalCredits + credit.amount;
   }, 0)
   
   const debits = this.state.debits;
   const totalDebits = debits.reduce((totalDebits, debit) => {
     return totalDebits + debit.amount;
   }, 0)
    return totalCredits - totalDebits;
  }

  componentWillMount () {
    this._accountDebits()
    this._accountCredits()
  }

  _addNewDebitToDebitsList = (newDebit) => {
    const debits = [...this.state.debits];
    debits.push(newDebit);
    this.setState({debits});
  };


  render(){

    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince}/>
    )
    const debitsInAccount = () => (<DebitsList 
      debits={this.state.debits}
      accountBalance={accountBalance}
      addNewDebitToDebitsList={this._addNewDebitToDebitsList}
    />)
    const creditsInAccount = () => (<CreditList
      credits={this.state.credits}
      accountBalance={accountBalance}/>
    )

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent} />
            <Route exact path="/debits" render={debitsInAccount}/>  
            <Route exact path="/credits" render={creditsInAccount}/>
          </div>
        </Router>
    );
  }
}


export default App;