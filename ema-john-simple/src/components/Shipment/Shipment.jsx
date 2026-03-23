import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import {UserContext} from '../../App';
import { getDataBaseCart, proceedOrder } from '../../utilities/fakedb';

const Shipment = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [loggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const savedCart = getDataBaseCart();
        const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()};
        fetch("http://localhost:3000/addOrder", {
            method: "POST",
            body: JSON.stringify(orderDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            alert('Your order placed successfully!');
            proceedOrder();
        })
    };
    return (
        <div>
            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={loggedInUser.name} {...register('name', {required: "Name is required"})} />
                {errors.name && <span className='error'>{errors.name.message}</span>}
                <input defaultValue={loggedInUser.email} {...register('email', {required: "Name is required"})} />
                {errors.email && <span className='error'>{errors.email.message}</span>}
                <input {...register('address', {required: "Name is required"})} />
                {errors.address && <span className='error'>{errors.address.message}</span>}
                <input {...register('phone', {required: "Name is required"})} />
                {errors.phone && <span className='error'>{errors.phone.message}</span>}
                <input type='submit' value="Submit" />
            </form>
        </div>
    );
};

export default Shipment;