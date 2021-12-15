import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K2SkkSFnWKpARGz8VWCm2HLLAIEKapsWS4aZD7xr0PVKgUaok2n6yhv70lNN6we9NfAlYakjGn8XKSZpGFhiZ0b00Ipwwuy4Q';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='images/crown.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;