import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import FileUploader from "./FileUploader";

function Register(params={}) {
    document.title='Register - Market Place';

    const [names,setNames]=useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('');
    const [dob,setDOB]=useState('');
    const [course,setCourse]=useState('');
    const [address,setAddress]=useState('');
    const [school,setSchool]=useState('');
    const [schooladdress,setSchoolAddress]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmPassword]=useState('');
    const [image,setImage]=useState('');
    const [send,setSend]=useState(false);


    const createNewStudentAccount= (e)=>{
        e.preventDefault();
        if (password !== confirmpassword) {
            setSend('Passwords does not match');
            return;
        }
        setSend('Creating Account....')
        let data = {}
        data.resource = "student_create";
        data.names = names;
        data.email = email;
        data.gender = gender;
        data.dob = dob;
        data.course = course;
        data.address = address;
        data.school = school;
        data.schooladdress = schooladdress;
        
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
            window.location.reload();

        }).then(response => {
            console.log(response);
        });
        

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
                        <form onSubmit={createNewStudentAccount} method='POST'>
                            <div>
                                <span>Name</span>
                                <input type="text" value={names} onChange={(e)=>setNames(e.target.value)} placeholder="Your Name" />
                            </div>

                            <div>
                                <span>Email</span>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" />
                            </div>

                            <div>
                            <span>Gender</span>
                            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option value="">Choose Your Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>

                            <div>
                            <span>Date of Birth</span>
                            <input type="date" value={dob} onChange={(e)=>setDOB(e.target.value)} placeholder="Date" />
                            </div>

                            <div>
                                <span>Course</span>
                                <input type="text" value={course} onChange={(e)=> setCourse(e.target.value)} placeholder="Enrolled In" />
                            </div>

                            <div>
                                <span>Address</span>
                                <textarea value={address} onChange={(e)=> setAddress(e.target.value)} placeholder="Address"></textarea>
                            </div>

                            <div>
                                <span>Image </span>
                                <FileUploader/>
                            </div>

                            <div>
                                <span>School</span>
                                <input type="text" value={school} onChange={(e)=>setSchool(e.target.value)} placeholder="School" />
                            </div>

                            <div>
                                <span>School Address</span>
                                <textarea value={schooladdress} onChange={(e)=>setSchoolAddress(e.target.value)} placeholder="School Address"></textarea>
                            </div>

                            <div>
                                <span>Password</span>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Your Password" minLength="6" type="password" required />
                            </div>

                            <div>
                                <span>Confirm Password</span>
                                <input type="password" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Your Confirm Password" minLength="6" type="password" required/>
                            </div>

                            {send &&
                                <div style={{"backgroundColor":"grey","color":"white","padding":"10px","borderRadius":"10px"}}>
                                    <span style={{"textAlign":"center"}}>{send}</span>
                                </div>
                            }

                            <div>
                                <button>Create Student Account</button>
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

export default Register;
