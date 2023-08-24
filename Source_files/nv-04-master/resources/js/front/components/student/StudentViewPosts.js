import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';
import PostsList from "../PostsList";

function StudentViewPosts() {
    document.title = 'Student View Posts: Market Place';
    return (
        <div>
            <StudentNav setActive='posts'/>
            <div id="roles">
                <section className="dashboard">
                    <div className="dashboard-title">
                        <p style={{"textAlign": "center"}}>Latest Published Posts
                            <button className="product-btn"><Link to="/student/add_posts">Create Post</Link></button>
                        </p>
                    </div>
                    <PostsList own_posts={false}/>


                </section>
            </div>
        </div>
    );
}

export default StudentViewPosts;
