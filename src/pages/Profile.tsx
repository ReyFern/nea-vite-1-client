import Navbar from '../components/Navbar';
import '../App.css';

export default function Profile() {

    if (sessionStorage.getItem("token") == "authorised") {
        return (
            <div>
                <Navbar/>
                <h2>Logged in</h2>
            </div>
        );
    }
    else {
        return (
            <div>
                <Navbar/>
                <h2>It seems you aren't logged in.</h2>
                <h2>You can register if you are a new user or log in if you are a returning user.</h2>
                <a href="/Register"><button><h2>Register</h2></button></a>
                <a href="/SignIn"><button><h2>Sign In</h2></button></a>
            </div>
        );
    }
}