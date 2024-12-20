import reactLogo from '../assets/react.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <ul className='navbar'>
            <a href='/'><img src={reactLogo} className="navbar-logo" alt="React logo"></img></a>
            <li className='navbar-element'><a href='/profile'>Profile</a></li>
            <li className='navbar-element'><a href='/party'>Party</a></li>
            <li className='navbar-element'><a href='/create'>Character Creator</a></li>
            <li className='navbar-element'><a href='/'>Home</a></li>
        </ul>
    );
}