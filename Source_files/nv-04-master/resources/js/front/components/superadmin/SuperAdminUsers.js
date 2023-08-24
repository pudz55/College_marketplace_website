import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';
;



function SuperAdminUsers() {
    document.title='Super Admin Users: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='users'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Manage All Users
                </p>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">

                <div className="dashboard-info-item">
                    <div className="">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Student Name One
                                <span className="product-price">Student</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                <div>
                                <p className="product-description">Student information and course undertaking</p>
                                <p className="product-seller">Phone Number</p>
                                <p className="product-seller">Email Address</p>
                                <p className="product-seller">School Name</p>
                                <p className="product-seller">Gender</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="/superadmin/view_student">View Profile</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>
                            
                            </div>  
                        </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            BS Owner Name Three
                            <span className="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">Business Name</p>

                            <p>
                                <button className="product-btn-chat"><Link to="/superadmin/business_profile">View Profile</Link></button>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Sch Admin Name Five
                            <span className="product-price">School Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">School Name</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            SP Admin Name Seven
                            <span className="product-price">Super Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    </div>  
                </div>

                

                <div className="dashboard-info-item">
                    <div className="">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Student Name One
                                <span className="product-price">Student</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                <div>
                                <p className="product-description">Student information and course undertaking</p>
                                <p className="product-seller">Phone Number</p>
                                <p className="product-seller">Email Address</p>
                                <p className="product-seller">School Name</p>
                                <p className="product-seller">Gender</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="/superadmin/view_student">View Profile</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>
                            
                            </div>  
                        </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            BS Owner Name Three
                            <span className="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">Business Name</p>

                            <p>
                                <button className="product-btn-chat"><Link to="/superadmin/business_profile">View Profile</Link></button>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Sch Admin Name Five
                            <span className="product-price">School Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">School Name</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            SP Admin Name Seven
                            <span className="product-price">Super Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    </div>  
                </div>

                <div className="dashboard-info-item">
                    <div className="">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Student Name One
                                <span className="product-price">Student</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                <div>
                                <p className="product-description">Student information and course undertaking</p>
                                <p className="product-seller">Phone Number</p>
                                <p className="product-seller">Email Address</p>
                                <p className="product-seller">School Name</p>
                                <p className="product-seller">Gender</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="/superadmin/view_student">View Profile</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>
                            
                            </div>  
                        </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            BS Owner Name Three
                            <span className="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">Business Name</p>

                            <p>
                                <button className="product-btn-chat"><Link to="/superadmin/business_profile">View Profile</Link></button>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Sch Admin Name Five
                            <span className="product-price">School Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p className="product-seller">School Name</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            SP Admin Name Seven
                            <span className="product-price">Super Admin</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p className="product-description">Student information and course undertaking</p>
                            <p className="product-seller">Phone Number</p>
                            <p className="product-seller">Email Address</p>
                            <p>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    </div>  
                </div>

                
                </div>

                

            </div>

            
            </section>
        </div>
    </div>
  );
}

export default SuperAdminUsers;