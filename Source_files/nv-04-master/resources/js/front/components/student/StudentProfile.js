import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';

function StudentProfile() {
    document.title='Student Profile: Market Place';
  return (
    <div>
        <StudentNav setActive='profile'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Your Profile</p>
            
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">

                <div className="dashboard-info-item">
                    
                    <div className="">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Your Student Name
                                <span className="product-price">Male(Age: 21)</span>
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
                                <p>
                                    <button className="product-btn-chat"><Link to="/student/view_student">View Student</Link></button>
                                </p>
                                </div>
                            </div>
                            
                            </div>  
                        </div>
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Your Posts</h3>
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Posted by Student 1
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="post-details">
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <img className="post-info-img" src={marketplace_sell_3_jpg} />
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Comment(s) (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                </p>
                            </div>
                            </div>  
                        </div>
        
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Posted by Student 1
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="post-details">
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <img className="post-info-img" src={marketplace_sell_3_jpg} />
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Comment(s) (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                </p>
                            </div>
                            </div>  
                        </div>

                        
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Products Both or Sold</h3>
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                                <div className="post-info-item-title-info">
                                <p>
                                    Product Two
                                    <span className="product-price">@ $25.00</span>
                                </p>
                                </div>
                            </div>
                            <div className="dashboard-info-item-info">
                                <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                    <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p className="product-seller">Seller :<br/> Me</p>
                                    <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                    </p>
                                </div>
                                </div>
                            </div>  
                        </div>
    
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Five
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>
                        
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Seven
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>
    
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Eight
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>

                    </div>  
                </div>

                <div className="dashboard-info-item">
                    
                    <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Your Products</h3>
                    <div className="dashboard-info-item-info">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                                <div className="post-info-item-title-info">
                                <p>
                                    Product Two
                                    <span className="product-price">@ $25.00</span>
                                </p>
                                </div>
                            </div>
                            <div className="dashboard-info-item-info">
                                <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                    <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p className="product-seller">Seller :<br/> Me</p>
                                    <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                    </p>
                                </div>
                                </div>
                            </div>  
                        </div>
    
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Five
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>
                        
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Seven
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>
    
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Product Eight
                                <span className="product-price">@ $25.00</span>
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                                <div>
                                <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                                <p className="product-seller">Seller :<br/> Me</p>
                                <p>
                                    <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                    <button className="product-btn-chat">Delete</button>
                                    <button className="product-btn-chat">Update</button>
                                </p>
                                </div>
                            </div>
                            </div>  
                        </div>
                    
                    

                    </div>  
                </div>

                <div className="dashboard-info-item">
                    
                    <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Your Clubs</h3>
                    <div className="dashboard-info-item-info">

                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Food and Health(Member)
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                                <div>
                                <p className="product-description">Be strong and protect your health from outdated traditions about food that will anyway destroy your immunity</p>
                                <p className="product-seller">Creator :<br/> student One</p>
                                <p><button className="product-btn-chat"><Link to="/student/join_clubs">Leave</Link></button></p>
                                </div>
                            </div>
                            </div>  
                        </div>

                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p>
                                Reality Club(New)
                                </p>
                            </div>
                            </div>
                            <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                                <div>
                                <p className="product-description">Reality Club envisions on nature and how it applys to fashion and art to students</p>
                                <p className="product-seller">Creator :<br/> student One</p>
                                <p><button className="product-btn-chat"><Link to="/student/join_clubs">Join</Link></button></p>
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

export default StudentProfile;