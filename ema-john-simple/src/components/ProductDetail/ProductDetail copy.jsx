import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const product = fakeData.find(product => product.key === key);
    // const [product, setProduct] = useState({});
    // useEffect(()=>{
    //     const loadedProduct = fakeData.find(product => product.key === key);
    //     setProduct(loadedProduct);
    // }, []);

    return (
        <div>
        <h1>Your Product Details.</h1>
           <Product product={product} showAddToCart={false} /> 
        </div>
    );
};

export default ProductDetail;