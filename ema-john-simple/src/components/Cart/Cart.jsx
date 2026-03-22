import React from 'react';

const Cart = props => {
    const {cart} = props;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0)
    const totalQuanity = cart.reduce((total, product)=> total + product.quantity ,0);

    const tax = (totalPrice * 0.1).toFixed(2);
    
    let shippingCost = 0;
    if(totalPrice > 35){
        shippingCost = 0;
    }else if(totalPrice > 15){
        shippingCost = 4.99;
    }else if(totalPrice > 0){
        shippingCost = 12.99;
    }

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);



    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Total Quanity: {totalQuanity}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Tax + Vat: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;