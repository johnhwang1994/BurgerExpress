import React, { Component } from 'react';
import { connect } from 'react-redux';

// import CheckoutSummary from '../../components/checkoutSummary/CheckoutSummary';
import ContactData from '../../components/contactData/ContactData';
import ReviewModal from '../../components/reviewModal/ReviewModal';

class Checkout extends Component {
  state = {
    showReviewModal: false
  };

  handleOpen = () => {
    this.setState({ showReviewModal: true });
  };

  handleClose = () => {
    this.setState({ showReviewModal: false });
  };

  render() {
    return (
      <div>
        {/* <CheckoutSummary
          ingredients={this.props.ings}
          totalPrice={this.props.totalPrice}
        /> */}
        <ContactData onClick={this.handleOpen} />
        <ReviewModal
          myProps={{
            open: this.state.showReviewModal,
            onClose: this.handleClose
          }}
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

export default connect(mapStateToProps)(Checkout);
