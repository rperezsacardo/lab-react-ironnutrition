import React, { Component } from 'react';
import './App.scss';

import meal from './meals.json';
import MealBox from './components/MealBox';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: [...meal],
      eatten: [],
      totalCal: 0,
      foodList: []
    };
  }

  addMeal = (event) => {
    console.log(event);
    const name = Object.keys(event)[0];
    const value = Number(Object.values(event)[0]);
    console.log('name', name, 'value', value);
    let food = this.state.meals.filter((el) => {
      return el.name === name;
    });

    food[0].quantity += value ? value : 1;
    this.setState({
      eatten: [...this.state.eatten, ...food],
      totalCal: this.state.totalCal + food[0].quantity * food[0].calories
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name);
    this.setState({
      [name]: value.toUpperCase()
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    // const meals = this.meals;
    // console.log(this.mealBox);
    console.log(this.state.eatten);
    return (
      <div>
        <form action="">
          <input type="text" onChange={this.handleChange} name="search" id="" />
        </form>
        <Container>
          {this.state.meals.map((el) => {
            const nameUpperCased = el.name.toUpperCase();
            const searchTerm = this.state.search;
            console.log(searchTerm);
            return (
              <>
                {nameUpperCased.includes(searchTerm) && (
                  <MealBox
                    key={el.name}
                    name={el.name}
                    calories={el.calories}
                    image={el.image}
                    qtd={el.numb}
                    addMeal={this.addMeal}
                  />
                )}
              </>
            );
          })}
        </Container>
        <Container>
          {this.state.eatten.map((el) => {
            return (
              <div>
                <p>
                  {el.name} x {el.quantity}
                </p>
              </div>
            );
          })}
        </Container>
        <Container>Total Calorires: {this.state.totalCal}</Container>
      </div>
    );
  }
}
export default App;
