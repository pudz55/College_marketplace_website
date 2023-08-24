import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';



function SchoolDash() {
    document.title='Sch Admin DashBoard: Market Place';
  return (
    <div>
        <SchoolNav setActive=''/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Welcome School Admin Name</p>
            
            </div>
            <div class="dashboard-info">
                <h1 style={{"textAlign": "center"}}>Charts Will load here </h1>
                <div class="dashboard-item">
                
                
                
                </div>

                

            </div>

            
            </section>
        </div>
    </div>
  );
}

export default SchoolDash;