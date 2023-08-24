import {Link} from 'react-router-dom';

import Nav from './Nav';

function Reset() {
    document.title='Reset - Market Place';
  return (
    <div>
        <Nav setActive='login'/>
        <div id="wrapper">
            <section className="services">
                <div className="services-summary">
                <p>Back to Login?, <Link to="/login">Login Here</Link>.</p>
                </div>
            <div className="services-info">
                <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-info">
                        <p style={{"textAlign": "center"}}>Reset your Password</p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                        <form>
                            <div>
                                <span>Email</span>
                                <input type="email" placeholder="Your Email Address" />
                            </div>

                            <div>
                                <button>Reset Password</button>
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

export default Reset;