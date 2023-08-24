import {Link, useParams} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import {useState} from "react";


function Cart() {
    document.title = 'Student Profile';
    let [hasProducts, setHasProducts] = useState(getCart().length > 0);
    let [hasOrders, setHasOrders] = useState(false);
    let [orders, setOrders] = useState(null);
    let [products, setProducts] = useState(getCart);

    if (orders=== null) {
        //get student summary
        postData({
            resource: 'user_profile',
        }, function (resp) {
            if (resp.error) {
                alert(resp.error);
            }
            setOrders(resp.cart??[]);
            setHasOrders(resp.cart.length > 0);
        })

    }

    function removeCart(event) {
        let product_id = event.target.getAttribute('data-id');
        removeFromCart(parseInt(product_id));
    }

    function order() {
        if (!confirm('Are you sure you want to order these items?')) {
            return;
        }
        postData({
            resource: 'cart_create',
            products: getCart()
        }, function (resp) {
            if (resp.error) {
                alert(resp.error);
            }
            alert('Your order has been placed successfully');
            //clear cart
            localStorage.setItem('cart', JSON.stringify([]));
            setProducts([]);
            setHasProducts(false);
        })
    }

    return (<div>
        <div>
            <div id="roles">
                <section className="dashboard">
                    <div className="dashboard-title">
                        <p style={{"textAlign": "center"}}>Your Cart
                            <button className="product-btn" onClick={back}>Back</button>
                        </p>
                        <div>
                            <button className="product-btn" onClick={order}>Place Order</button>
                        </div>

                    </div>
                    <div className="dashboard-info">
                        <div className="dashboard-item">
                            <div className="dashboard-info-item">
                                {hasProducts ? (<div>
                                        <h3 style={{"textAlign": "center", "marginBottom": "10px"}}>Items in Cart</h3>
                                        <div className="dashboard-info-item-info">
                                            {products.map((product, index) => (
                                               <div key={index}>
                                                   <div className="services-info-item">
                                                       <div className="services-info-item-title">
                                                           <div className="post-info-item-title-info">
                                                               <p>
                                                                   {product.names}
                                                                   <span className="product-price">@ {product.price}</span>
                                                               </p>
                                                           </div>
                                                       </div>
                                                       <div className="dashboard-info-item-info">
                                                           <div className="product-details">
                                                               <img className="dashboard-info-img"
                                                                    src={product.image??marketplace_phone_selling_jpg}/>
                                                               <div>
                                                                   <p className="product-description">{product.description}</p>
                                                                   <p className="product-seller">Seller :<br/> {product.user.names}</p>
                                                                   <p>
                                                                       <button className="product-btn-chat"  data-id={product.id} onClick={removeCart}>Remove</button>
                                                                   </p>
                                                               </div>
                                                           </div>

                                                       </div>
                                                   </div>
                                               </div>

                                            ))}


                                        </div>
                                    </div>) : (<div>
                                        <h3 style={{"textAlign": "center", "marginBottom": "10px"}}>No Items in
                                            Cart</h3>
                                    </div>)}
                            </div>

                            <div className="dashboard-info-item">
                                {hasOrders ? (<div>
                                        <h3 style={{"textAlign": "center", "marginBottom": "10px"}}>In Progress</h3>
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
                                                        <img className="dashboard-info-img"
                                                             src={marketplace_sell_1_jpg}/>
                                                        <div>
                                                            <p className="product-description">Be strong and protect
                                                                your health from outdated traditions about food that
                                                                will anyway destroy your immunity</p>
                                                            <p className="product-seller">Creator :<br/> student One</p>
                                                            <p>
                                                                <button className="product-btn-chat"><Link
                                                                    to="/student/join_clubs">Leave</Link></button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>) : (<div>
                                        <h3 style={{"textAlign": "center", "marginBottom": "10px"}}>No Orders in
                                            progress</h3>
                                    </div>)}
                            </div>


                        </div>


                    </div>


                </section>
            </div>
        </div>
        ) : (
        <div className="dashboard-info-item">
            <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p style={{"textAlign": "center"}}>
                                No Items In Cart
                            </p>
                            <button className="product-btn-chat"><Link to="#" onClick={back}>Back (<span
                                className="cart">0</span>)</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>);
}

export default Cart;
