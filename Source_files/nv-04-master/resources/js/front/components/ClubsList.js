import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FileUploader from "./FileUploader";
import marketplace_sell_3_jpg from "../images/marketplace-sell-3.jpg";
import marketplace_sell_1_jpg from "../images/marketplace-sell-1.jpg";
import ClubJoinLeave from "./elems/ClubJoinLeave";


function ClubsList(params = {}) {
    document.title = 'Clubs List';
    const [clubs, setClubs] = useState([]);
    const [hasClubs, setHasClubs] = useState(false);
    if (!hasClubs) {
        //get clubs from api
        postData({resource: "club_list", own_clubs: params.own_clubs}, function (resp) {
            if (resp.error) {
                setHasClubs(false);
                return;
            }
            setHasClubs(true);
            setClubs(resp);
            //save clubs to local storage
            localStorage.setItem('clubs', JSON.stringify(resp));
        });
    }

    function editClub(event) {
        let club_id = event.target.getAttribute('data-id');
      //dispatch event to edit post
        window.dispatchEvent(new CustomEvent('editClub', {detail: {id:club_id}}));
    }
    function deleteClub(event) {
        let club_id = event.target.getAttribute('data-id');
        //confirm delete
        if (!confirm('Are you sure you want to delete this club?')) {
            return;
        }
        post({resource: "club_delete", id: club_id}, function (resp) {
                if (resp.error) {
                    alert(resp.error);
                    return;
                }
                //remove post from local storage
                let clubs = localStorage.getItem('clubs');
                if (clubs === null) {
                    clubs = [];
                } else {
                    clubs = JSON.parse(clubs);
                }
                let new_clubs = clubs.filter(club => club.id !== club_id);
                localStorage.setItem('clubs', JSON.stringify(new_clubs));
                 setClubs(new_clubs);
                 setHasClubs(true);
            }
        ).then(r =>{
        });

    }


    return (<div>
        {!hasClubs ? (<div className="dashboard-info-item">
            <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p style={{"textAlign": "center"}}>
                                No Clubs Yet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<div className="services-info-item">
            <div className="services-info-item-title">
                <div className="post-info-item-title-info">
                    <p>
                        {(params.own_clubs ? "My" : "Latest") + " Clubs"}
                    </p>
                </div>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">
                    {clubs.map((club, index) => (<div className="dashboard-info-item-info" key={index}>
                        <div className="">
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
                                        <img className="dashboard-info-img" src={club.image ? club.image : marketplace_sell_3_jpg} />
                                        <div>
                                            <p className="product-description">{club.clubinfo}</p>
                                            <p className="product-seller">Creator :<br/> {club.user.names}</p>
                                            <p>

                                                <ClubJoinLeave club_id={club.id} already_joined={club.current_user_joined}/>
                                                <button className="product-btn-chat"><Link to={"/club/"+club.id}>Members ({club.members_count}) </Link></button>
                                                {club.user.id === JSON.parse(localStorage.getItem('mercadoraccount'))[0]['id'] ? (<p>
                                                    <button className="product-btn-chat" data-id={club.id} onClick={editClub}>Update</button>
                                                    <button className="product-btn-chat" data-id={club.id} onClick={deleteClub}>Delete</button>
                                                </p>) : ''}

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>)}
    < /div>);
}

export default ClubsList;
