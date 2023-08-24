import {Link} from 'react-router-dom';

import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import NewClub from '../NewClub';

import StudentNav from './StudentNav';
import ClubsList from "../ClubsList";

function StudentAddClub() {
    document.title = 'Student Add Club: Market Place';
    return (
        <div>
            <StudentNav setActive='clubs'/>
            <div id="roles">
                <section className="dashboard">
                    <div className="dashboard-title">
                        <p style={{"textAlign": "center"}}>Create and Manage your Clubs
                            <button className="product-btn"><Link to="/student/view_clubs">Back to other Clubs</Link>
                            </button>
                        </p>
                    </div>
                    <div className="dashboard-info">
                        <div className="dashboard-item">

                            <NewClub/>
                            <ClubsList own_clubs={false}/>
                        </div>


                    </div>


                </section>
            </div>
        </div>
    );
}

export default StudentAddClub;
