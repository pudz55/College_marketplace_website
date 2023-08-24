import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';



function SuperAdminViewStudent() {
    document.title='Super Admin View Student: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='students'/>
        <div id="roles">
            <section class="dashboard">
                <div class="dashboard-title">
                    <p style={{"textAlign": "center"}}>Viewing Student Profile
                        <button class="product-btn"><Link to="/superadmin/student_profile">Back to Profiles</Link></button>
                    </p>
                
                </div>
                <div class="dashboard-info">
                    <div class="dashboard-item">

                    <div class="dashboard-info-item">
                        
                        <div class="">
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Student Name One
                                    <span class="product-price">Male(Age: 21)</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                    <div>
                                    <p class="product-description">Student information and course undertaking</p>
                                    <p class="product-seller">Phone Number</p>
                                    <p class="product-seller">Email Address</p>
                                    </div>
                                </div>
                                
                                </div>  
                            </div>
                            <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Post by Student</h3>
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Posted by Student 1
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="post-details">
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src={marketplace_sell_3_jpg} />
                                    <p>
                                        <button class="product-btn-chat">Approve</button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat"><Link to="#">Comment(s) (<span class="cart">0</span>)</Link></button>
                                    </p>
                                </div>
                                </div>  
                            </div>
            
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Posted by Student 1
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="post-details">
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src={marketplace_sell_3_jpg} />
                                    <p>
                                        <button class="product-btn-chat">Approve</button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat"><Link to="#">Comment(s) (<span class="cart">0</span>)</Link></button>
                                    </p>
                                </div>
                                </div>  
                            </div>

                        </div>  
                    </div>

                    <div class="dashboard-info-item">
                        
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Student Products</h3>
                        <div class="dashboard-info-item-info">
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product One
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller :<br/> Business Owner One</p>
                                    <p>
                                        <button class="product-btn-chat">Delete</button>
                                        
                                    </p>
                                    </div>
                                </div>
                                
                                </div>  
                            </div>
            
                            
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product Three
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller :<br/> Business Owner One</p>
                                    <p>
                                        <button class="product-btn-chat">Delete</button>
                                        
                                    </p>
                                    </div>
                                </div>
                                </div>  
                            </div>
            
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product Four
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller :<br/> Business Owner One</p>
                                    <p>
                                        <button class="product-btn-chat">Delete</button>
                                        
                                    </p>
                                    </div>
                                </div>
                                </div>  
                            </div>
                        
                        

                        </div>  
                    </div>

                    <div class="dashboard-info-item">
                        
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Student Clubs</h3>
                        <div class="dashboard-info-item-info">

                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Food and Health(Member)
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                                    <div>
                                    <p class="product-description">Be strong and protect your health from outdated traditions about food that will anyway destroy your immunity</p>
                                    <p class="product-seller">Creator :<br/> student One</p>
                                    <p><button class="product-btn-chat">Remove</button></p>
                                    </div>
                                </div>
                                </div>  
                            </div>

                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Reality Club(New)
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                                    <div>
                                    <p class="product-description">Reality Club envisions on nature and how it applys to fashion and art to students</p>
                                    <p class="product-seller">Creator :<br/> student One</p>
                                    <p><button class="product-btn-chat">Remove</button></p>
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

export default SuperAdminViewStudent;