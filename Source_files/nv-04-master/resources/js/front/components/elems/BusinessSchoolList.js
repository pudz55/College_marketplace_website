import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';



function SchoolBusiness() {
    document.title='Sch Admin Businesses: Market Place';
  return (
    <div>
        <SchoolNav setActive='business'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Business Owners and Businesses
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
                                    Business Name
                                    <span class="product-price">Business Owner</span>
                                </p>
                            </div>
                            </div>
                            <div class="dashboard-info-item-info">
                            <div class="product-details">
                                <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                <div>
                                    <p class="product-description">Business Information and Description</p>
                                    <p class="product-seller">Email Address</p>
                                <p>
                                    <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                    <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                    <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
                                <button class="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    </div>  
                </div>

                

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
                            <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
                                <button class="product-btn-chat">Delete</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    </div>  
                </div>

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
                            <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
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
                                Business Name
                                <span class="product-price">Business Owner</span>
                            </p>
                        </div>
                        </div>
                        <div class="dashboard-info-item-info">
                        <div class="product-details">
                            <img class="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p class="product-description">Business Information and Description</p>
                            <p class="product-seller">Email Address</p>
                            <p>
                                <button class="product-btn-chat"><Link to="/school/products">Products</Link></button>
                                <button class="product-btn-chat"><Link to="/school/view_adverts">Adverts</Link></button>
                                <button class="product-btn-chat"><Link to="/school/business_profile">Profile</Link></button>
                                <button class="product-btn-chat">Delete</button>
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

export default SchoolBusiness;