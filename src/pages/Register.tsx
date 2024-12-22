import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Register() {
    const fetchAPI = async () => {
        axios.post("http://localhost:5000/register-request", "Hello!")
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div>
            <Navbar/>
            <form id="user_data" method="post" action="http://localhost:5000/register-request">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/><br/><br/>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email"/><br/><br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password"/><br/><br/>
                <label htmlFor="confPassword">Confirm Password: </label>
                <input type="text" id="confPassword" name="confPassword"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}