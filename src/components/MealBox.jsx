import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class MealBox extends Component {
  constructor() {
    super();
    this.state = {
      //
    };
  }
  createKey = () => {
    // this.setState({
    //   list: Math.random() + Date.now()
    // });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name);
    this.setState({
      [name]: value
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    // console.log(Object.values(this.state));
    return (
      <div>
        <img src={this.props.image} style={{ maxWidth: '10em' }} />
        <div>
          <h5>{this.props.name}</h5>
          <small>{this.props.calories}</small>
        </div>

        <form onSubmit={this.handleSubmmit}>
          <input
            name={this.props.name}
            type="number"
            onChange={this.handleChange}
            value={this.props.qtd}
          />
          <Button name={this.props.name} onClick={() => this.props.addMeal(this.state)}>
            +
          </Button>
        </form>
      </div>
    );
  }
}

export default MealBox;
