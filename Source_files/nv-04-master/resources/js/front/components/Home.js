import {Link} from 'react-router-dom';

import marketplace_bg_jpg from '../images/marketplace-bg.jpg';
import Nav from './Nav';

function Home() {
    document.title='Home - Market Place';
  return (
    <div>
        <Nav setActive=''/>
        <div id="wrapper">
            <section id="marketplace">
            <div className="marketplace-info">
                <h4>Welcome to College Marketplace</h4>
                <p>College Marketplace is your truely shopping companion.</p>
                <p>Get Your Shopping list and enjoy the experince and services here.</p>
                <input type="text" placeholder="Fill Your Shopping List..." />
                <button>Search</button>
            </div>
            </section>

            <section className="services">
            <div className="services-summary">
                <p>Mercado Escolar main service is to promote and facilitate business within a College through Students and Business people.</p>
            </div>
            <div className="services-info">
                <div className="services-info-1">
                <p>Check what Mercado Escolar Offers</p>
                <img className="services-info-img" src={marketplace_bg_jpg}/>
                <Link to="/services"><button>There is more that we offer here ...</button></Link>
                </div>
                <div className="services-info-items">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-n">
                        1
                    </div>
                    <div className="services-info-item-title-info">
                        <p><Link to="/service_shopping_center">Shopping Center</Link></p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                    <p>This site provides you with products and items mostly required in your studies. Business Owners updates products in stock for students to buy</p>
                    </div>  
                </div>

                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-n">
                        2
                    </div>
                    <div className="services-info-item-title-info">
                        <p><Link to="/service_shopping_center">Its a Student Marketplace</Link></p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                    <p>As far as students can buy products and what they need from business owners, they can also sell their own items that are no longer in use to them to other students</p>
                    </div>  
                </div>

                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-n">
                        3
                    </div>
                    <div className="services-info-item-title-info">
                        <p><Link to="/service_shopping_center">Sharing Information as Posts</Link></p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                    <p>Posts published by student contains very critical and educative content for other students. Also some students get a chance to share ideas through Posts</p>
                    </div>  
                </div>

                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-n">
                        4
                    </div>
                    <div className="services-info-item-title-info">
                        <p><Link to="/service_shopping_center">Creating , Joining and managing clubs</Link></p>
                    </div>
                    </div>
                    <div className="services-info-item-info">
                    <p>Students interested in working as a team or sharing ideas creates clubs and invite each other or just joins already existing clubs</p>
                    </div>  
                </div>
                </div>
            </div>
            </section>
        </div>
    </div>
  );
}

export default Home;