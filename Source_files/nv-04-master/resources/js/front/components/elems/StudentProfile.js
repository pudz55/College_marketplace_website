import {Link, useParams} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import {useState} from "react";
import ClubsList from "../ClubsList";
import ProductsList from "../ProductsList";
import PostsList from "../PostsList";


function StudentProfile(params = {}) {
    document.title = 'Student Profile';
    params = useParams();
    let student_id = params.id;
    let [student, setStudent] = useState({});
    let [hasStudent, setHasStudent] = useState(false);

    if (!hasStudent) {
        //get student summary
        postData({
            resource: 'user_profile', id: student_id,
        }, function (resp) {
            if (resp.error) {
                alert(resp.error);
                return;
            }
                setStudent(resp);
                setHasStudent(true);
        })

    }
    return (<div>
            {hasStudent ? (<div>
                    <div id="roles">
                        <section className="dashboard">
                            <div className="dashboard-title">
                                <p style={{"textAlign": "center"}}>Viewing Profile &nbsp;&nbsp;&nbsp;{student.names}</p>
                                    <button className="product-btn" onClick={back}>Back</button>

                            </div>
                            <div className="dashboard-info">
                                <div className="dashboard-item">

                                    <div className="dashboard-info-item">

                                        <div className="">
                                            <div className="services-info-item">
                                                <div className="services-info-item-title">
                                                    <div className="post-info-item-title-info">
                                                        <p>
                                                            {student.names}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dashboard-info-item-info">
                                                    <div className="product-details">
                                                        <img className="dashboard-info-img"
                                                             src={student.image??marketplace_phone_selling_jpg}/>
                                                        <div>
                                                            <p className="product-seller">{student.address}</p>
                                                            <p className="product-seller">{student.email}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <h3 style={{"textAlign": "center", "marginBottom": "10px"}}>Posts</h3>
                                            <PostsList user_id={student_id} own_posts={false}/>

                                        </div>
                                    </div>

                                    <ClubsList user_id={student_id} own_clubs={false}/>
                                    <ProductsList user_id={student_id} own_products={false}/>


                                </div>


                            </div>


                        </section>
                    </div>
                </div>) : (<div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                    No Students Yet
                                </p>
                                <button className="product-btn-chat"><Link to="#" onClick={back}>Back (<span
                                    className="cart">0</span>)</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>);
}

export default StudentProfile;
