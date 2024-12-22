import reactLogo from '../assets/react.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <ul className='navbar'>
            <a href='/'><img src={reactLogo} className="navbar-logo" alt="React logo"></img></a>
            <a href='/Profile'><li className='navbar-element'>Profile</li></a>
            <a href='/Party'><li className='navbar-element'>Party</li></a>
            <a href='/CreateCharacter'><li className='navbar-element'>Character Creator</li></a>
            <a href='/'><li className='navbar-element'>Home</li></a>
        </ul>
    );
}