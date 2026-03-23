import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/product/'+key)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [key]);

    return (
        <div>
        <h1>Your Product Details.</h1>
           <Product product={product} showAddToCart={false} /> 
        </div>
    );
};

export default ProductDetail;