import {Link} from 'react-router-dom';

import marketplace_business_jpg from '../images/marketplace-business.jpg';
import marketplace_shopping_1_jpg from '../images/marketplace-shopping-1.jpg';
import marketplace_community_jpg from '../images/marketplace-community.jpg';
import marketplace_clubs_concept_1_png from '../images/marketplace-clubs-concept-1.png';
import marketplace_bg_jpg from '../images/marketplace-bg.jpg';





import Nav from './Nav';

function Service() {
    document.title='Service - Market Place';
  return (
    <div>
        <Nav setActive='services'/>
        <div id="wrapper">
            <section className="services">
            <div className="services-summary">
                <p>Mercado Escolar main service is to promote and facilitate business within a College through Students and Business people.</p>
            </div>
                <div className="services-info">
                    <div className="services-info-items">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                                <div className="services-info-item-title-n">
                                1
                                </div>
                                <div className="services-info-item-title-info">
                                <p><Link to="#">Shopping Center</Link></p>
                                </div>
                            </div>
                            <div className="services-info-item-info">
                                <p>This site provides you with products and items mostly required in your studies. Business Owners updates products in stock for students to buy</p>
                                <img className="services-info-full-img" src={marketplace_shopping_1_jpg}/>
                                <Link to="/service_shopping_center"><button>More Info ...</button></Link>
                            </div>  
                        </div>
                    </div>

                    <div className="services-info-items">
                        <div className="services-info-item">
                            <div className="services-info-item-title">
                            <div className="services-info-item-title-n">
                                2
                            </div>
                            <div className="services-info-item-title-info">
                                <p><Link to="#">Its a Student Marketplace</Link></p>
                            </div>
                            </div>
                            <div className="services-info-item-info">
                            <p>As far as students can buy products and what they need from business owners, they can also sell their own items that are no longer in use to them to other students</p>
                            <img className="services-info-full-img" src={marketplace_bg_jpg}/>
                                <Link to="/service_shopping_center"><button>More Info ...</button></Link>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="services-info">
                <div className="services-info-items">
                    <div className="services-info-item">
                    <div className="services-info-item-title">
                        <div className="services-info-item-title-n">
                        3
                        </div>
                        <div className="services-info-item-title-info">
                        <p><Link to="#">Sharing Information as Posts</Link></p>
                        </div>
                    </div>
                    <div className="services-info-item-info">
                        <p>Posts published by student contains very critical and educative content for other students. Also some students get a chance to share ideas through Posts</p>
                        <img className="services-info-full-img" src={marketplace_community_jpg}/>
                        <Link to="/service_shopping_center"><button>More Info ...</button></Link>
                    </div>  
                    </div>
                </div>

                <div className="services-info-items">

                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-n">
                        4
                    </div>
                    <div className="services-info-item-title-info">
                        <p><Link to="#">Creating , Joining and managing clubs</Link></p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                    <p>Students interested in working as a team or sharing ideas creates clubs and invite each other or just joins already existing clubs</p>
                    <img className="services-info-full-img" src={marketplace_clubs_concept_1_png}/>
                        <Link to="/service_shopping_center"><button>More Info ...</button></Link>
                    </div>  
                </div>
                </div>

                
            </div>
            </section>
        </div>
    </div>
  );
}

export default Service;