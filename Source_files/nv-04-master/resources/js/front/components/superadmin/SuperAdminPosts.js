import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';
import PostsList from "../PostsList";



function SuperAdminPosts() {
    document.title='Super Admin Posts: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='posts'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Latest Student Published Posts
                </p>
            </div>
           <PostsList own_posts={false} is_sa={true}/>


            </section>
        </div>
    </div>
  );
}

export default SuperAdminPosts;
