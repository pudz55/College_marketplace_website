import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import StudentNav from './StudentNav';

function StudentDash() {
    document.title='Student DashBoard: Market Place';
  return (
    <div>
        <StudentNav setActive=''/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Welcome Student Name</p>
            
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">

                <div className="dashboard-info-item">
                    <div className="dashboard-info-item-title">
                    <div className="dashboard-info-item-title-info">
                        <p>Products and Shoppinig</p>
                        <div className="dashboard-btns">
                        <Link to="/student/add_products"><button>View/Add Products</button></Link>
                        <Link to="/student/buy_products"><button>Shop</button></Link>
                        </div>
                    </div>
                    </div>
                    <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product One
                            <span className="product-price">@ $25.00</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            <p className="product-seller">Seller :<br/> Business Owner One</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/student/chat">Message</Link></button>
                                <button className="product-btn-chat">Add</button>
                                <button className="product-btn-chat"><Link to="#">Cart (<span className="cart">0</span>)</Link></button>
                            </p>
                            </div>
                        </div>
                        
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Two
                            <span className="product-price">@ $25.00</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            <p className="product-seller">Seller :<br/> Me</p>
                            <p>
                                <button className="product-btn-chat"><Link to="#">Sales (<span className="cart">0</span>)</Link></button>
                                <button className="product-btn-chat">Delete</button>
                                <button className="product-btn-chat">Update</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Three
                            <span className="product-price">@ $25.00</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            <p className="product-seller">Seller :<br/> Business Owner One</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/student/chat">Message</Link></button>
                                <button className="product-btn-chat">Add</button>
                                <button className="product-btn-chat"><Link to="#">Cart (<span className="cart">0</span>)</Link></button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Four
                            <span className="product-price">@ $25.00</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            <p className="product-seller">Seller :<br/> Business Owner One</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/student/chat">Message</Link></button>
                                <button className="product-btn-chat">Add</button>
                                <button className="product-btn-chat"><Link to="#">Cart (<span className="cart">0</span>)</Link></button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>


                    </div>  
                </div>

                <div className="dashboard-info-item">
                    <div className="dashboard-info-item-title">
                    <div className="dashboard-info-item-title-info">
                        <p>Posts  Content</p>
                        <div className="dashboard-btns">
                        <Link to="/student/add_posts"><button>New Post</button></Link>
                        <Link to="/student/view_posts"><button>View Posts</button></Link>
                        </div>
                    </div>
                    </div>
                    <div className="dashboard-info-item-info">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Posted by Student 1
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="post-details">
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            </div>
                            <img className="post-info-img" src={marketplace_sell_3_jpg} />
                            <p>
                                <button className="product-btn-chat"><Link to="/student/view_student">Student Profile</Link></button>
                                <button className="product-btn-chat"><Link to="#">Comment(s) (<span className="cart">0</span>)</Link></button>
                            </p>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Posted by Student 1
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="post-details">
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            </div>
                            <img className="post-info-img" src={marketplace_sell_3_jpg} />
                            <p>
                                <button className="product-btn-chat"><Link to="/student/view_student">Student Profile</Link></button>
                                <button className="product-btn-chat"><Link to="#">Comment(s) (<span className="cart">0</span>)</Link></button>
                            </p>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Posted by Me
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="post-details">
                            <div>
                            <p className="product-description">This Product provides a clear vision during the night or at least helps</p>
                            </div>
                            <img className="post-info-img" src={marketplace_sell_3_jpg} />
                            <p>
                                <button className="product-btn-chat"><Link to="#">Comment(s) (<span className="cart">0</span>)</Link></button>
                                <button className="product-btn-chat">Delete</button>
                            </p>
                        </div>
                        </div>  
                    </div>

                    </div>  
                </div>

                <div className="dashboard-info-item">
                    <div className="dashboard-info-item-title">
                    <div className="dashboard-info-item-title-info">
                        <p>Clubs</p>
                        <div className="dashboard-btns">
                        <Link to="/student/add_club"><button>New Club</button></Link>
                        <Link to="/student/join_clubs"><button>Join / Joined Clubs</button></Link>
                        </div>
                    </div>
                    </div>
                    <div className="dashboard-info-item-info">

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Food and Health(Member)
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Be strong and protect your health from outdated traditions about food that will anyway destroy your immunity</p>
                            <p className="product-seller">Creator :<br/> student One</p>
                            <p><button className="product-btn-chat"><Link to="/student/join_clubs">Leave</Link></button></p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Reality Club(New)
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Reality Club envisions on nature and how it applys to fashion and art to students</p>
                            <p className="product-seller">Creator :<br/> student One</p>
                            <p><button className="product-btn-chat"><Link to="/student/join_clubs">Join</Link></button></p>
                            </div>
                        </div>
                        </div>  
                    </div>


                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Soccer With fans(Me)
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-description">Helps Soccer fans with latest development in world of football</p>
                            <p className="product-seller">Creator :<br/> Me</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/student/join_clubs">Members</Link></button>
                                <button className="product-btn-chat"><Link to="/student/join_clubs">Update</Link></button>
                                <button className="product-btn-chat"><Link to="/student/join_clubs">Delete</Link></button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                        
                    </div>  
                </div>

                
                </div>

                

            </div>

            
            </section>
        </div>
    </div>
  );
}

export default StudentDash;