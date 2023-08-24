import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';



function SuperAdminProfile() {
    document.title='Super Admin Profile: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='profile'/>
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
                                
                                <div class="dashboard-info-item-info">
                                <div class="product-details">
                                    <img class="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                                    <div>
                                    <p class="product-description">SuperAdmin Admin Bio and other Information</p>
                                    <p class="product-seller">Email Address</p>
                                    <p class="product-seller">Phone</p>
                                    <p class="product-seller">SuperAdmin</p>
                                    <p>
                                        <button class="product-btn-chat"><Link to="#">Edit Profile</Link></button>
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

export default SuperAdminProfile;