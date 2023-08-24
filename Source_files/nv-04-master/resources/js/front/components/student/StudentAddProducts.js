import {useState} from 'react';
import {Link} from 'react-router-dom';

import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';

import StudentNav from './StudentNav';
import ProductsList from "../ProductsList";

function StudentAddProducts() {
    document.title = 'Student Add Products: Market Place';


    return (<div>
            <StudentNav setActive='shop'/>
            <div id="roles">
                <section className="dashboard">
                    <div className="dashboard-title">
                        <p style={{"textAlign": "center"}}>Create and Update Your Products
                            <button className="product-btn"><Link to="/student/buy_products">Back to Products</Link>
                            </button>
                        </p>
                    </div>

                    <ProductsList own={true}/>

                </section>
            </div>
        </div>);
}

export default StudentAddProducts;
