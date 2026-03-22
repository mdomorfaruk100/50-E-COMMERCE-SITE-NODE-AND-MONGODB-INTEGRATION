import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Product = ({product, handleAddToCart, showAddToCart}) => {
    const{key, name, seller, stock, img, price} = product;
    return (
        <div className='product'>
            <div>
                <img src={img} />
            </div>
            <div>
                <h4 className='product-name'>
                    <Link to={`/product/${key}`}>
                        {name}
                    </Link>
                </h4>
                <br />
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { showAddToCart && <button className='main-button' onClick={() => handleAddToCart(product)}><FontAwesomeIcon icon={faCartShopping} />add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;