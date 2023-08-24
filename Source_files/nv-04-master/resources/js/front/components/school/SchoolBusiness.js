import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';
import StudentsList from "../elems/StudentsList";



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
            <StudentsList type={'business'} own={false}/>


            </section>
        </div>
    </div>
  );
}

export default SchoolBusiness;
