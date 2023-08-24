import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';
import ClubsList from "../ClubsList";

function StudentViewClubs() {
    document.title='Student View Clubs: Market Place';
  return (
    <div>
        <StudentNav setActive='clubs'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Join Clubs
                    <button className="product-btn"><Link to="/student/add_club">Create Club</Link></button>
                </p>
            </div>
            <ClubsList own_clubs={false}/>


            </section>
        </div>
    </div>
  );
}

export default StudentViewClubs;
