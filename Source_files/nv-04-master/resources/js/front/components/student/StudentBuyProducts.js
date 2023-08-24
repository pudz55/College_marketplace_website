import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';

import StudentNav from './StudentNav';
import ProductsList from "../ProductsList";

function StudentBuyProducts() {
    document.title = 'Student Buy Products: Market Place';
    return (
        <div>
            <StudentNav setActive='shop'/>
            <div id="roles">
                <section className="dashboard">
                    <div className="dashboard-title">
                        <p style={{"textAlign": "center"}}>Get through Products on Sell
                            <button className="product-btn"><Link to="/student/add_products">New Product</Link></button>
                        </p>
                    </div>
                    <ProductsList own={false}/>
                </section>
            </div>
        </div>
    );
}

export default StudentBuyProducts;
