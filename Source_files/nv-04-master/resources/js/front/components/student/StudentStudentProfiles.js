import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';
import StudentsList from "../elems/StudentsList";

function StudentStudentProfile() {
    document.title='Student Profiles: Market Place';
  return (
    <div>
        <StudentNav setActive='students'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Student Profiles in School A
                </p>
            </div>
           <StudentsList />

            </section>
        </div>
    </div>
  );
}

export default StudentStudentProfile;
