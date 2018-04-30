import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/burger/Burger';
import BurgerControls from '../../components/burgerControls/BurgerControls';
import * as actions from '../../store/actions';

class BurgerBuilder extends Component {
  getDisableInfo(){
    const disableInfo ={
      ...this.props.ings
    }
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return disableInfo;
  }

  render() {
    return (
      <div
        style={{
          paddingTop: '50px'
        }}
      >
        <Burger ingredients={this.props.ings} />
        <BurgerControls
          onAddIngredient={this.props.onAddIngredient}
          onRemoveIngredient={this.props.onRemoveIngredient}
          disable={this.getDisableInfo()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice
  };
};

const mapDispatchToProps = {
  onAddIngredient: actions.addIngredient,
  onRemoveIngredient: actions.removeIngredient
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
