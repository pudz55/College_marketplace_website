import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import BusinessNav from './BusinessNav';


function BusinessProfile() {
    document.title='Business Owner Profile: Market Place';
  return (
    <div>
        <BusinessNav setActive='profile'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Your Profile</p>
            
            </div>
            <div class="dashboard-info">
                <div class="dashboard-item">

                    <div class="dashboard-info-item">
                        
                        <div class="">
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Business Name
                                    <span class="product-price">Business Owner</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src="../images/marketplace-phone-selling.jpg" />
                                    <div>
                                    <p class="product-description">Business Information and Description</p>
                                    <p class="product-seller">Email Address</p>
                                    <p>
                                        <button class="product-btn-chat"><a href="#">Edit Profile</a></button>
                                        <button class="product-btn-chat"><a href="products.html">Manage Products</a></button>
                                    </p>
                                    </div>
                                </div>
                                
                                </div>  
                            </div>

                        </div>  
                    </div>

                    <div class="dashboard-info-item">
                        
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Your Products</h3>
                        <div class="dashboard-info-item-info">
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                    <div class="post-info-item-title-info">
                                    <p>
                                        Product Two
                                        <span class="product-price">@ $25.00</span>
                                    </p>
                                    </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                    <div class="product-details">
                                    <img class="dashboard-info-img" src="../images/marketplace-sell-3.jpg" />
                                    <div>
                                        <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                        <p class="product-seller">Seller : Me</p>
                                        <p>
                                        <button class="product-btn-chat"><a href="#">Sales (<span class="cart">0</span>)</a></button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat">Update</button>
                                        </p>
                                    </div>
                                    </div>
                                </div>  
                            </div>
        
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product Five
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src="../images/marketplace-sell-3.jpg" />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller : Me</p>
                                    <p>
                                        <button class="product-btn-chat"><a href="#">Sales (<span class="cart">0</span>)</a></button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat">Update</button>
                                    </p>
                                    </div>
                                </div>
                                </div>  
                            </div>
                            
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product Seven
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src="../images/marketplace-sell-3.jpg" />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller : Me</p>
                                    <p>
                                        <button class="product-btn-chat"><a href="#">Sales (<span class="cart">0</span>)</a></button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat">Update</button>
                                    </p>
                                    </div>
                                </div>
                                </div>  
                            </div>
        
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                    Product Eight
                                    <span class="product-price">@ $25.00</span>
                                    </p>
                                </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src="../images/marketplace-sell-3.jpg" />
                                    <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    <p class="product-seller">Seller : Me</p>
                                    <p>
                                        <button class="product-btn-chat"><a href="#">Sales (<span class="cart">0</span>)</a></button>
                                        <button class="product-btn-chat">Delete</button>
                                        <button class="product-btn-chat">Update</button>
                                    </p>
                                    </div>
                                </div>
                                </div>  
                            </div>
                        
                        

                        </div>  
                    </div>

                    <div class="dashboard-info-item">
                        
                        <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Adverts and Promotions</h3>
                        <div class="">
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                    <div class="post-info-item-title-info">
                                    <p>
                                        Posted by Me
                                    </p>
                                    </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                    <div class="post-details">
                                    <div>
                                        <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src="../images/marketplace-sell-3.jpg" />
                                        <p>
                                        <button class="product-btn-chat">Update</button>
                                        <button class="product-btn-chat">Delete</button>
                                        </p>
                                    </div>
                                </div>  
                            </div>
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                    <div class="post-info-item-title-info">
                                    <p>
                                        Posted by Me
                                    </p>
                                    </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                    <div class="post-details">
                                    <div>
                                        <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src="../images/marketplace-sell-3.jpg" />
                                        <p>
                                        <button class="product-btn-chat">Update</button>
                                        <button class="product-btn-chat">Delete</button>
                                        </p>
                                    </div>
                                </div>  
                            </div>
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                    <div class="post-info-item-title-info">
                                    <p>
                                        Posted by Me
                                    </p>
                                    </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                    <div class="post-details">
                                    <div>
                                        <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src="../images/marketplace-sell-3.jpg" />
                                        <p>
                                        <button class="product-btn-chat">Update</button>
                                        <button class="product-btn-chat">Delete</button>
                                        </p>
                                    </div>
                                </div>  
                            </div>
                            <div class="services-info-item">
                                <div class="services-info-item-title">
                                    <div class="post-info-item-title-info">
                                    <p>
                                        Posted by Me
                                    </p>
                                    </div>
                                </div>
                                <div class="dashboard-info-item-info">
                                    <div class="post-details">
                                    <div>
                                        <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                    </div>
                                    <img class="post-info-img" src="../images/marketplace-sell-3.jpg" />
                                        <p>
                                        <button class="product-btn-chat">Update</button>
                                        <button class="product-btn-chat">Delete</button>
                                        </p>
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

export default BusinessProfile;