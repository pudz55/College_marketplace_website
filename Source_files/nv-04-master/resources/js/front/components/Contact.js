import {Link} from 'react-router-dom';

import marketplace_business_jpg from '../images/marketplace-business.jpg';
import Nav from './Nav';

function Contact() {
    document.title='Contact - Mercado Escolar';
  return (
    <div>
        <Nav setActive='contact'/>
        <div id="wrapper">
            <section className="services">
                <div className="services-summary">
                    <p>Send any queries related to Mercado Escolar.</p>
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
                                <form>
                                    <div>
                                        <span>Name</span>
                                        <input type="text" placeholder="Your Name" />
                                    </div>

                                    <div>
                                        <span>Email</span>
                                        <input type="email" placeholder="Your Email" />
                                    </div>

                                    <div>
                                        <span>Address</span>
                                        <textarea placeholder="Address"></textarea>
                                    </div>

                                    <div>
                                        <span>Subject</span>
                                        <input type="text" placeholder="Subject" />
                                    </div>

                                    <div>
                                        <span>Message</span>
                                        <textarea rows="5" placeholder="Message"></textarea>
                                    </div>

                                    <div>
                                        <button>Submit</button>
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

export default Contact;