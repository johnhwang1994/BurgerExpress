import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/burger/Burger';
import BurgerControls from '../../components/burgerControls/BurgerControls';
import { addIngredient, removeIngredient, intiate } from '../../store/actions';
import Progress from '../../components/UI/Progress';
import OrderModal from '../../components/reviewModal/OrderModal';

class BurgerBuilder extends Component {
  state = {
    showOrderModal: false,
  }

  componentDidMount() {
    this.props.intiate();
  }

  getDisableInfo() {
    const disableInfo = {
      ...this.props.ings
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return disableInfo;
  }

  updatePurchaseState() {
    let sum = 0;
    for(let ingName in this.props.ings){
      sum += this.props.ings[ingName];
    }
    return sum > 0;
  }

  handleOpen = () => {
    this.setState({ showOrderModal: true });
  };

  handleClose = () => {
    this.setState({ showOrderModal: false });
  };

  burgerProgress(ingredients){
    return (ingredients ? <Burger ingredients={this.props.ings} /> : <Progress />)
  }

  render() {
    return (
      <div
        style={{
          paddingTop: '50px'
        }}
      >
        {this.burgerProgress(this.props.ings)}
        <BurgerControls
          onAddIngredient={this.props.addIngredient}
          onRemoveIngredient={this.props.removeIngredient}
          disable={this.getDisableInfo()}
          totalPrice={this.props.totalPrice}
          ingredients={this.props.ings}
          purchasable={this.updatePurchaseState()}
          click={this.handleOpen}
        />
        <OrderModal
          myProps={{
            open: this.state.showOrderModal,
            onClose: this.handleClose
          }}
          close={this.handleClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    err: state.burgerBuilder.error,
  };
};

export default connect(mapStateToProps, {
  addIngredient,
  removeIngredient,
  intiate
})(BurgerBuilder);
