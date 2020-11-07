import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "book": "Please select a book",
      "food": "Please select a food",
      "activity": "Please select an activity",
      "show": "Please select a show"
    };
  }
  makeChoice = (type, choice) => {
    this.setState(state => {
      state[type] = choice
      return state
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard food={this.state.food} show={this.state.show} book={this.state.book} activity={this.state.activity}/>
        <div className="card-container">
          <Card type="book" title="Les Miserable" makeChoice={this.makeChoice} />
          <Card type="food" title="French Onion Soup" makeChoice={this.makeChoice} />
          <Card type="Activity" title="Fishing" makeChoice={this.makeChoice} />
          <Card type="Show" title="Romeo" makeChoice={this.makeChoice} />
        </div>
        <button onClick={() => {this.makeChoice("food", "Pizza")}}>Pizza</button>
        <button onClick={() => {this.makeChoice("food", "Tacos")}}>Tacos</button>
        <button onClick={() => {this.makeChoice("food", "Chiken")}}>Chiken</button>
      </div>
    );
  }
}
export default App;