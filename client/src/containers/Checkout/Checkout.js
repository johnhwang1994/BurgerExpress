import React, { Component } from 'react';

import CheckoutSummary from '../../components/checkoutSummary/CheckoutSummary';
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
        <CheckoutSummary />
        <ContactData onClick={this.handleOpen}/>
        <ReviewModal myProps={{open: this.state.showReviewModal, onClose: this.handleClose}} />
      </div>
    );
  }
}

export default Checkout;
