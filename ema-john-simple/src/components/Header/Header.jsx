import { Link } from 'react-router';
import logo from '../../images/logo.png';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { signInWithGoogle, signOutUser } from '../Login/loginManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleClick = () => {
        if (loggedInUser.email) {
            // sign out user 
            signOutUser().then(res => {
                setLoggedInUser(res);
            })
        } else {
            // sign in user
            signInWithGoogle().then(res => {
                setLoggedInUser(res);
            })
        }

    }

    return (
        <div className='header'>
            <img src={logo} alt="ema-john" />
            <nav>
                {/* <Link to='/shop'>Shop</Link> */}
                <a href='/shop'>Shop</a>
                <Link to='/review'>Order Review</Link>
                <Link to='/orders'>Order History</Link>
                {
                    loggedInUser.email && <span style={{color: 'yellow'}}>Welcome, {loggedInUser.name}</span>
                }
                <button onClick={handleClick} style={{ marginBottom: '5px' }}>{loggedInUser.email ? 'Sign Out' : 'Sign In'}</button>
            </nav>
        </div>
    );
};

export default Header;