import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import NewPost from '../NewPost';
import BusinessNav from './BusinessNav';
import PostsList from "../PostsList";


function BusinessAdverts() {
    document.title='Business Owner Adverts: Market Place';
  return (
    <div>
        <BusinessNav setActive='adverts'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Your Adverts and Promotions
                </p>
            </div>
            <div class="dashboard-info">
                <div class="dashboard-item">

                    <div class="dashboard-info-item">
                        <NewPost type={'ad'} />
                    </div>
                    <PostsList type={'ad'} own_posts={true}/>

                </div>



            </div>


            </section>
        </div>
    </div>
  );
}

export default BusinessAdverts;
