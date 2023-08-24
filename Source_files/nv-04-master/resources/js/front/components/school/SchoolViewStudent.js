import {Link, useParams} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import SchoolNav from './SchoolNav';
import StudentProfile from "../elems/StudentProfile";



function SchoolViewStudent() {
    document.title='Sch Admin View Student: Market Place';
   let params=useParams();
    let student_id=params.student_id;
  return (
    <div>
        <SchoolNav setActive='students'/>
        <div id="roles">
            <section class="dashboard">
                <div class="dashboard-title">
                    <p style={{"textAlign": "center"}}>Viewing Student Profile
                        <button class="product-btn"><Link to="/school/student_profile">Back to Profiles</Link></button>
                    </p>

                </div>
                <StudentProfile id={student_id} />


            </section>
        </div>
    </div>
  );
}

export default SchoolViewStudent;
