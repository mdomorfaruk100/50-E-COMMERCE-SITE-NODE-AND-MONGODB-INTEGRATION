import React from 'react';

const Inventory = () => {
    const handleAddProduct = async () => {
        const product = {};
        fetch('http://localhost:3000/addProduct', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        
    }
    return (
        <div>
        <form>
        <p><span>Name: </span><input type="text" /></p>
        <p><span>Price: </span><input type="text" /></p>
        <p><span>Quantity: </span><input type="text" /></p>
        <p><span>Product Image</span><input type="file" /></p>
            <button onClick={handleAddProduct}>Add Product</button>
        </form>
        </div>
    );
};

export default Inventory;