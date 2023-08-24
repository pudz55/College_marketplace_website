import axios from 'axios';
import {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import Nav from './Nav';

function Login() {
    document.title = 'Login - Market Place';

    const [redirect, setRedirect] = useState(false);
    const [loginurl, setLoginUrl] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [send, setSend] = useState(false);

    //check if user is logged in
    if (localStorage.getItem('mercadoraccount')) {
        return <Navigate to={'/' + JSON.parse(localStorage.getItem('mercadoraccount'))[0]['role'] + '/dashboard'}/>
    }


    if (!redirect) {
        localStorage.removeItem('mercadoraccount');
    }

    const loginToAccount = (e) => {
        e.preventDefault();
        setSend('Login to Account....')
        let form = new FormData();
        form.append('email', email);
        form.append('password', password);

        //create form data
        let data = {}
        data.resource = "login";
        data.Username = Base64.encode(makeid(6) + email)
        data.Password = Base64.encode(makeid(6) + password)
        //send data to server
        post(data, function (resp) {
            if (resp.error) {
                setSend(resp.error)
                return;
            }
            window.localStorage.bearer = resp.token;
            window.localStorage.expires = resp.expires;
            window.localStorage.iat = resp.iat;
            let users = [JSON.parse(resp.user)];
            setSend("Redirecting...")
            localStorage.setItem('mercadoraccount', JSON.stringify(users));
            setRedirect(true);
            setLoginUrl('/' + users[0]['role'] + '/dashboard');
        }, function (err) {

        }).catch((error) => {
            setSend("API: " + error)
        })


    }


    if (redirect) {
        return <Navigate to={loginurl}/>
    }

    return (
        <div>
            <Nav setActive='login'/>
            <div id="wrapper">
                <section className="services">
                    <div className="services-info">
                        <div className="">
                            <div className="services-info-item">
                                <div className="services-info-item-title">
                                    <div className="services-info-item-title-info">
                                        <p style={{"textAlign": "center"}}>Login to your Account Here</p>
                                    </div>
                                </div>
                                <div className="services-info-item-info">
                                    <form onSubmit={loginToAccount}>
                                        <div>
                                            <span>Email</span>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                   placeholder="Your Email"/>
                                        </div>

                                        <div>
                                            <span>Password</span>
                                            <input type="password" value={password}
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   placeholder="Your Password"/>
                                        </div>

                                        <p>Did you Forgot your Password?, <Link to="/reset">Reset with Email here</Link>.
                                        </p>
                                        {/* <p>User roles?
                            <br/>
                                <Link to="/student/dashboard">Student Account</Link>
                            <br/>
                                <Link to="/business/dashboard">Business Owner Account</Link>
                            <br/>
                                <Link to="/school/dashboard">School Admin Account</Link>
                            <br/>
                                <Link to="/superadmin/dashboard">Super Admin Account</Link>
                            </p> */}
                                        {send &&
                                            <div style={{
                                                "backgroundColor": "grey",
                                                "color": "white",
                                                "padding": "10px",
                                                "borderRadius": "10px"
                                            }}>
                                                <span style={{"textAlign": "center"}}>{send}</span>
                                            </div>
                                        }
                                        <div>
                                            <button>Login</button>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="services-summary">


                        <p> No Account?
                            <br/>
                            <Link to="/register">Create Student Account</Link>
                            <br/>
                            <Link to="/business">Business Account</Link>
                            <br/>
                            <Link to="/school">School Account</Link>
                        </p>
                    </div>

                    <div className="services-summary">

                    </div>

                </section>
            </div>
        </div>
    );
}

export default Login;
