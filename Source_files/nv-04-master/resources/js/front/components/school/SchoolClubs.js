import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';
import ClubsList from "../ClubsList";



function SchoolClubs() {
    document.title='Sch Admin Clubs: Market Place';
  return (
    <div>
        <SchoolNav setActive='clubs'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Clubs and Members
                </p>
            </div>
           <ClubsList />
            </section>
        </div>
    </div>
  );
}

export default SchoolClubs;
