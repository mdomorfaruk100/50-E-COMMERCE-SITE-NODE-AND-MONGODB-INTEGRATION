import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import {UserContext} from '../../App';

const Shipment = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [loggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log('form submitted: ', data);
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