import React from 'react';

const Inventory = () => {
    const handleAddProduct = async () => {
        const products = await fetch("/src/fakeData/fakeData.json").then(res => res.json());
        fetch('http://localhost:3000/addProducts', {
            method: "POST",
            body: JSON.stringify(products),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;