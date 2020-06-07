import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />;
        if (this.props.ings) {
            // order reducer에 존재하는 purchased state는 일단 구매가 성공적으로 이루어지면 true가 된다.
            // 이제 이 purchased 값을 초기화 시켜주어야 하는데, 어디서 초기화를 시킬지 결정해야 한다
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary =
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelHandler}
                        checkoutContinued={this.checkoutContinueHandler}
                    />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    />
                </div>

        }
        return (
            summary
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);
