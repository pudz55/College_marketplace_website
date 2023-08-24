import {Link} from 'react-router-dom';

import marketplace_business_jpg from '../images/marketplace-business.jpg';
import Nav from './Nav';

function About() {
    document.title='About - Market Place';
  return (
    <div>
        <Nav setActive='about'/>
        <div id="wrapper">
            <section className="services">
            <div className="services-summary">
                <p>Mercado Escolar or Marketplace is a site for college students and business owners.</p>
            </div>
                
            <div className="services-info">
                <div className="services-info-1">
                <img className="services-info-img" src={marketplace_business_jpg}/>
                </div>
                <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-info">
                        <p>This site provides you with products and items mostly required in your studies. Business Owners updates products in stock for students to buy</p>
                        <p>Once bussiness owners registers , their then get a platform to add their own products for selling.</p>
                        <p>Also here at the center, businesses will be advertized and those with promotions aired here.</p>
                    </div>  
                </div>
    
                </div>

            </div>
            </section>
        </div>
    </div>
  );
}

export default About;