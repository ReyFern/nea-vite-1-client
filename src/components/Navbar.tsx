import reactLogo from '../assets/react.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <ul className='navbar'>
            <a href='/'><img src={reactLogo} className="navbar-logo" alt="React logo"></img></a>
            <li className='navbar-element'><a href='/Profile'>Profile</a></li>
            <li className='navbar-element'><a href='/Party'>Party</a></li>
            <li className='navbar-element'><a href='/CreateCharacter'>Character Creator</a></li>
            <li className='navbar-element'><a href='/'>Home</a></li>
        </ul>
    );
}