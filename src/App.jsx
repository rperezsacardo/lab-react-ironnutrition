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

    food[0].quantity += value;
    this.setState({
      eatten: [...food],
      totalCal: this.state.totalCal + food[0].quantity * food[0].calories
    });
  };

  render() {
    // const meals = this.meals;
    // console.log(this.mealBox);
    console.log(this.state);
    return (
      <div>
        <Container>
          {this.state.meals.map((el) => {
            return (
              <MealBox
                key={el.name}
                name={el.name}
                calories={el.calories}
                image={el.image}
                qtd={el.numb}
                addMeal={this.addMeal}
              />
            );
          })}
        </Container>
        <Container>
          {this.state.eatten.map((el) => {
            return (
              <div>
                <h6>{el.name}</h6>
                <h6>{el.quantity}</h6>
              </div>
            );
          })}
        </Container>
        <Container>Total Calorires {this.state.totalCal}</Container>
      </div>
    );
  }
}
export default App;
