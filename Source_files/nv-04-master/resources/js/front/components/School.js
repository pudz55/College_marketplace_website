import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import FileUploader from "./FileUploader";

function Business() {
    document.title = 'Business - Market Place';
    let params= {role:'school'};
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [course, setCourse] = useState('');
    const [address, setAddress] = useState('');
    const [businessname, setBusinessName] = useState('');
    const [businessaddress, setBusinessAddress] = useState('');
    const [businessdesc, setBusinessDesc] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [send, setSend] = useState(false);


    const createNewBusinessAccount = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setSend('Passwords does not match');
            return;
        }
        setSend('Creating Accounting....');
        let data = {}
        data.resource = params.role+ "_create";
        data.names = names;
        data.email = email;
        data.gender = gender;
        data.dob = dob;
        data.course = course;
        data.address = address;
        data.businessname = businessname;
        data.businessaddress = businessaddress;
        data.businessdesc = businessdesc;
        data.password = password;
        data.confirmpassword = confirmpassword;
        data.image = $('input[name="image"]').data('upload_path');
        //send data to server
        post(data, function (resp) {
            if (resp.error) {
                setSend(resp.error)
                return;
            }
            setSend(resp.message)

        })

    }

    return (
        <div>
            <Nav setActive='login'/>
            <div id="wrapper">
                <section className="services">
                    <div className="services-summary">
                        <p>Already have Account, <Link to="/login">Please Login Here</Link>.</p>
                    </div>
                    <div className="services-info">
                        <div className="">
                            <div className="services-info-item">
                                <div className="services-info-item-title">
                                    <div className="services-info-item-title-info">
                                        <p style={{"textAlign": "center"}}>Fill all details and submit</p>
                                    </div>
                                </div>
                                <div className="services-info-item-info">
                                    <form onSubmit={createNewBusinessAccount}>
                                        <div>
                                            <span>Name</span>
                                            <input type="text" value={names} onChange={(e) => setNames(e.target.value)}
                                                   placeholder="Your Name"  minLength="3" type="text" required/>
                                        </div>

                                        <div>
                                            <span>Email</span>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                   placeholder={params.role+" email"}  type="email" required/>
                                        </div>

                                        <div>
                                            <span>{params.role} name</span>
                                            <input type="text" value={businessname}
                                                   onChange={(e) => setBusinessName(e.target.value)}
                                                   placeholder={params.role+" name"}  minLength="3" type="text" required/>
                                        </div>

                                        <div>
                                            <span>{params.role} description</span>
                                            <textarea rows="4" value={businessdesc}
                                                      onChange={(e) => setBusinessDesc(e.target.value)}
                                                      placeholder="What it's About"  minLength="30" type="text" required></textarea>
                                        </div>

                                        <div>
                                            <span>{params.role} address</span>
                                            <textarea rows="4" value={businessaddress}
                                                      onChange={(e) => setBusinessAddress(e.target.value)}
                                                      placeholder="Business Address"></textarea>
                                        </div>

                                        <div>
                                            <span>image </span>
                                            <FileUploader/>
                                        </div>

                                        <div>
                                            <span>Password</span>
                                            <input type="password" value={password}
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   placeholder="Your Password"  minLength="6" type="password" required/>
                                        </div>

                                        <div>
                                            <span>Confirm Password</span>
                                            <input type="password" value={confirmpassword}
                                                   onChange={(e) => setConfirmPassword(e.target.value)}
                                                   placeholder="Your Confirm Password"  minLength="6" type="password" required/>
                                        </div>

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
                                            <button>Create School Account</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
}

export default Business;
