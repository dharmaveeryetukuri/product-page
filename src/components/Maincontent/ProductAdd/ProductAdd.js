import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import classes from './ProductAdd.module.css';
import ReactDOM from 'react-dom';



class GroupedButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter: 0}
  }

  // increment or decrementing product adding to cart
  
  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    if(this.state.counter< 1){
      this.setState({
      counter:0
    });
    }else {
      this.setState({
        counter: this.state.counter- 1
      });
    }
  }
  render() {
    const displayCounter = this.state.counter >= 0;
    return (
        <ButtonGroup  className={classes.prodaddbutton} size="small" aria-label="small outlined button group">
          <Button onClick={this.handleIncrement}>+</Button>
          {displayCounter && <Button disabled>{this.state.counter}</Button>}
          {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
        </ButtonGroup>
    );
  }
}
export default GroupedButtons;