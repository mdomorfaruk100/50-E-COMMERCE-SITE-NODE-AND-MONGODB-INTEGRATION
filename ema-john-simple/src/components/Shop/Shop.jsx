import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router';
import { addToCart, getDataBaseCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);

    useEffect(() => {
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
    }, [products]);

    const handleAddToCart = (product) => {
        const productKey = product.key;
        const productAlreadyAdded = cart.find(product => productKey === product.key);
        let newCart = [];
        let count = 1;
        if (productAlreadyAdded) {
            count = productAlreadyAdded.quantity + count;
            const restProduct = cart.filter(product => productKey !== product.key);
            productAlreadyAdded.quantity = count;
            newCart = [...restProduct, productAlreadyAdded];
        } else {
            product.quantity = count;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToCart(product.key, count)
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} showAddToCart={true} handleAddToCart={handleAddToCart} product={product} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;