import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';
import StudentsList from "../elems/StudentsList";



function SchoolStudentProfiles() {
    document.title='Sch Admin Student Profiles: Market Place';
  return (
    <div>
        <SchoolNav setActive='students'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Student Profiles
                </p>
            </div>
           <StudentsList  type={'student'} own={false}/>


            </section>
        </div>
    </div>
  );
}

export default SchoolStudentProfiles;
