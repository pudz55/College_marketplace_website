import {Link} from 'react-router-dom';
import marketplace_buying_1_jpg from '../images/marketplace-buying-1.jpg';
import Nav from './Nav';

function ServiceShopingCenter() {
    document.title='Service Shoping Center - Market Place';
  return (
    <div>
        <Nav setActive='services'/>
        <div id="wrapper">
            <section className="services">
            
            <div className="services-info">
                <div className="services-info-1">
                <p>Check what Mercado Escolar Offers</p>
                <img className="services-info-img" src={marketplace_buying_1_jpg}/>
                </div>
                <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                    <div className="services-info-item-title-info">
                        <p>Shopping Center and buying from business owners</p>
                    </div>
                    </div>
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

export default ServiceShopingCenter;