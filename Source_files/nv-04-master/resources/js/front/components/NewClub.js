import axios from 'axios';
import {useState} from 'react';
import FileUploader from "./FileUploader";


function NewClub() {
    document.title = 'Student Add Products: Market Place';

    let mercadoraccount = localStorage.getItem('mercadoraccount');
    if (mercadoraccount === null) {
        mercadoraccount = false
    } else {
        mercadoraccount = JSON.parse(mercadoraccount)
    }

    const [clubname, setClubName] = useState('');
    const [information, setInformation] = useState('');
    const [agendas, setAgendas] = useState('');
    const [image, setImage] = useState('');
    const [send, setSend] = useState(false);


    const createClub = (e) => {
        e.preventDefault();
        setSend('Creating Club....')
        post({
                resource: "club_create",
                name: clubname,
                description: information,
                agendas: agendas,
                image: $("input[name=image]").data('upload_path'),
            }, function (resp) {
                if (resp.error) {
                    setSend(resp.error)
                    return;
                }
                setSend("Club Created")
                setClubName('');
                setInformation('');
                setAgendas('');
                setImage('');


            }
        ).finally(() => {
            setSend(false);
        });

    }
    return (
        <div>
            <div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                    Create your new Club and its responsibility
                                </p>
                            </div>
                        </div>
                        <div className="dashboard-info-item-info">
                            <div className="product-details">

                            </div>
                            <form onSubmit={createClub}>

                                <div>
                                    <span>Club Name</span>
                                    <input type="text" value={clubname} onChange={(e) => setClubName(e.target.value)}
                                           placeholder="Club Name"/>
                                </div>

                                <div>
                                    <span>Information</span>
                                    <textarea rows="4" value={information}
                                              onChange={(e) => setInformation(e.target.value)}
                                              placeholder="Club Information and Description"></textarea>
                                </div>

                                <div>
                                    <span>Agendas</span>
                                    <textarea rows="4" value={agendas} onChange={(e) => setAgendas(e.target.value)}
                                              placeholder="Club Agendas"></textarea>
                                </div>

                                <div>
                                    <span>Image </span>
                                    <FileUploader/>
                                </div>

                                {send &&
                                    <div style={{
                                        "backgroundColor": "grey",
                                        "color": "white",
                                        "padding": "10px",
                                        "borderRadius": "10px"
                                    }}>
                                        <span style={{"textAlign": "center"}}>{send}</span>
                                    </div>
                                }

                                <div>
                                    <button>Save New Club</button>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewClub;
