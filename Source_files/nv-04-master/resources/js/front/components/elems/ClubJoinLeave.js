import {useState} from "react";

function ClubJoinLeave(params={}){
    let club_id = params.club_id;
    let already_joined = params.already_joined;
    let [joined, setJoined] = useState(false);
    let [hasJoined, setHasJoined] = useState(false);
    if (!hasJoined) {
        post({resource: "club_joined", id: club_id}, function (resp) {
            if (resp.error) {
                setHasJoined(false);
                return;
            }
            setHasJoined(true);
            setJoined(resp.joined);
        });

    }
    function joinClub(event) {

        post({resource: "club_join", id: club_id,already_joined:already_joined}, function (resp) {
                if (resp.error) {
                    alert(resp.error);
                    return;
                }
                //update club in local storage
                let clubs = localStorage.getItem('clubs');
                if (clubs === null) {
                    clubs = [];
                }
                else {
                    clubs = JSON.parse(clubs);
                }
                let new_clubs = clubs.map(club => {
                    if (club.id === club_id) {
                        club.joined = true;
                    }
                    return club;
                }
                );
                localStorage.setItem('clubs', JSON.stringify(new_clubs));
               already_joined? alert('You have left the club'): alert('You have joined the club');
            }
        )

    }
    return (<>
        <button className="product-btn-chat" data-id={club_id}
                data-joined={already_joined} onClick={joinClub}>{already_joined?"Leave":"Join"}</button>
    </>);
}
export default ClubJoinLeave;
