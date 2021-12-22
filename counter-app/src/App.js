import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';
class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
    };


    handleIncreament = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf( counter);
        counters[index].value += 1;
        this.setState({ counters: counters});
    }
    // No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically.
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState( { counters : counters});
    }
  
    handleReset = () => {
        // reset the value for the children of counters
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState( { counters: counters});
    }
  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalCounters={ this.state.counters.filter(counter => counter.value > 0).length}/>
        <main>
          <Counters 
            counters={ this.state.counters}
            onReset={ this.handleReset}
            onDelete={ this.handleDelete}
            onIncreament={ this.handleIncreament}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;