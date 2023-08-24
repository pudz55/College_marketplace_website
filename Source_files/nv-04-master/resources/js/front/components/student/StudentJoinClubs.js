import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';
import {useState} from "react";
import ClubJoinLeave from "../elems/ClubJoinLeave";

function StudentJoinClubs(params = {}) {
    document.title='Join Clubs: Market Place';
    let club_id = params.id;
    const [club, setClub] = useState([]);
    const [members, setMembers] = useState([]);
    const [owner, setOwner] = useState([]);
    const [hasClubs, setHasClubs] = useState(false);
    const [hasMembers, setHasMembers] = useState(false);
    if (!hasClubs) {
        //get clubs from api
        post({resource: "club_list", own_clubs: params.own_clubs, id: club_id}, function (resp) {
            if (resp.error) {
                setHasClubs(false);
                return;
            }
            setHasClubs(true);
            setHasMembers(true);
            setClub(resp[0]);
            setOwner(resp[0].user.names);
            setMembers(resp[0].members);
            //apply state to interface
        }).then(r => console.log(r));

    }
  return (
    <div>
        <StudentNav setActive='clubs'/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Manage Club
                    <button className="product-btn"><Link to="/student/view_clubs">Back to Clubs</Link></button>
                </p>
            </div>
                {club?(

                    <div className="dashboard-info">
                        <div className="dashboard-item">

                            <div className="dashboard-info-item">
                                <div className="services-info-item">
                                    <div className="services-info-item-title">
                                        <div className="post-info-item-title-info">
                                            <p>
                                                {club.clubname}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dashboard-info-item-info">
                                        <div className="product-details">
                                            <img className="dashboard-info-img" src={club.image?club.image:marketplace_phone_selling_jpg} />
                                            <div>
                                                <p className="product-description">{club.clubinfo}</p>
                                                <p className="product-seller">Creator :<br/> {owner}</p>
                                                <p>
                                                    <ClubJoinLeave club_id={club.id} already_joined={club.current_user_joined}/>
                                                </p>
                                                <br/><hr/><h3>Members</h3>

                                                    {hasMembers?(
                                                        members.map((member, index) => (
                                                            <div key={index} className="dashboard-info-item-info">
                                                                <div className="product-details">
                                                                    <img className="dashboard-info-img" src={member.image?member.image:marketplace_phone_selling_jpg}  alt={"User Image"}/>
                                                                    <div>
                                                                        <p className="product-description">{member.names}</p>
                                                                        <p className="product-seller">{member.email}</p>
                                                                        <p className="product-seller">{member.course}</p>
                                                                        <p>
                                                                            <button className="product-btn-chat"><Link to={"/student/"+member.id}>View Student</Link></button>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ):(
                                                        'No Members Yet'
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    ):'Club not found'}


            </section>
        </div>
    </div>
  );
}

export default StudentJoinClubs;
