import React from 'react';

const ReviewItem = (props) => {
    const {key, name, quantity, price} = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewStyle}>
           <h4 className='product-name'>{name}</h4>
           <p>Quantity: {quantity}</p>
           <p><small>${price}</small></p>
           <button className='main-button' onClick={()=>props.handleRemove(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;