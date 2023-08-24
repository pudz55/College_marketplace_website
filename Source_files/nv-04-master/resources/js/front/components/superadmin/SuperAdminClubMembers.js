import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';



function SuperAdminClubMembers() {
    document.title='Super Admin Club Members: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='clubs'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Manage Club 
                    <button class="product-btn"><Link to="/superadmin/view_clubs">Back to Clubs</Link></button>
                </p>
            </div>
            <div class="dashboard-info">
                <div class="dashboard-item">

                    <div class="dashboard-info-item">
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
                                    <p>
                                        <button class="product-btn-chat"><Link to="#">Leave</Link></button>
                                        <button class="product-btn-chat"><Link to="#">Join</Link></button>
                                    </p>
                                </div>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div class="dashboard-info-item">
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
                                    <p>
                                        <button class="product-btn-chat"><Link to="#">Leave</Link></button>
                                        <button class="product-btn-chat"><Link to="#">Join</Link></button>
                                    </p>
                                </div>
                                </div>
                            </div>  
                        </div>
                    </div>


                    <div class="dashboard-info-item">
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
                                    <p>
                                        <button class="product-btn-chat"><Link to="#">Leave</Link></button>
                                        <button class="product-btn-chat"><Link to="#">Join</Link></button>
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

export default SuperAdminClubMembers;