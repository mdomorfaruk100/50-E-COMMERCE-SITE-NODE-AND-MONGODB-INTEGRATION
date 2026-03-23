import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router';
import { getDataBaseCart, removeFromCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const savedCart = getDataBaseCart();
        const productKeys = Object.keys(savedCart);


        fetch('http://localhost:3000/productsByKeys', {
            method: 'POST',
            body: JSON.stringify(productKeys),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => setCart(data));

        // const savedProducts = productKeys.map(key => {
        //     const product = products.find(pd => pd.key === key);
        //     product.quantity = savedCart[key];
        //     return product;
        // });
        // setCart(savedProducts);
    },[]);

    const handleProceedCheckout = () => {
        navigate('/shipment')
    }

    const handleRemove = productKey => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromCart(productKey);
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='main-button' onClick={handleProceedCheckout}>Proceed CheckOut</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;