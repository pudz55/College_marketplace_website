import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SuperAdminNav from './SuperAdminNav';
import StudentsList from "../elems/StudentsList";



function SuperAdminStudentProfiles() {
    document.title='Super Admin Student Profiles: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='students'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Student Profiles in School A
                </p>
            </div>
                <StudentsList own_students={false} is_sa={true}/>


            </section>
        </div>
    </div>
  );
}

export default SuperAdminStudentProfiles;
