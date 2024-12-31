import Navbar from '../components/Navbar';

export default function SignIn() {
    return (
        <div>
            <Navbar/>
            <form id="user_data" method="post" action="http://localhost:5000/signin-request">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/><br/><br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password"/><br/><br/>
                <input type="submit" value="Submit" className='submit-input'/>
            </form>
        </div>
    );
}