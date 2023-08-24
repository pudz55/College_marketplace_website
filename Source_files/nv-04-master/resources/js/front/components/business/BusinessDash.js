import {Link} from 'react-router-dom';

import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import BusinessNav from './BusinessNav';


function BusinessDash() {
    document.title='Business Owner DashBoard: Market Place';
  return (
    <div>
        <BusinessNav setActive=''/>
        <div id="roles">
            <section className="dashboard">
            <div className="dashboard-title">
                <p style={{"textAlign": "center"}}>Welcome </p>
            
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">
                
                <div className="dashboard-info-item">
                    
                    <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p style={{"textAlign": "center"}}>
                            Update and Manage Your Business Information
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <div>
                            <p>Define your business Name and what its about</p>
                            <button className="product-btn-chat"><Link to="/business/products">Products</Link></button>
                            <button className="product-btn-chat"><Link to="/business/view_adverts">Adverts</Link></button>
                            <button className="product-btn-chat"><Link to="#">Sales(<span className="cart">0</span>)</Link></button>
                            </div>
                        </div>
                        <form>
                            <div>
                                <span>Business Name</span>
                                <input type="text" placeholder="Business Name" />
                            </div>

                            <div>
                                <span>Business Description</span>
                                <textarea rows="4" placeholder="What it's About"></textarea>
                            </div>

                            <div>
                                <span>Business Address</span>
                                <textarea rows="4" placeholder="Business Address"></textarea>
                            </div>

                            <div>
                                <span>Image </span>
                                <input type="file" placeholder="Image" />
                            </div>
    
                            <div>
                                <button>Update Business Information</button>
                            </div>

                            
                            
                        </form>
                        
                        </div> 
                    </div>
                    


                    </div>  
                </div>

                <div className="dashboard-info-item">
                    <div className="dashboard-info-item-info">
                    <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Active Orders Requested</h3>
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product One
                            <span className="product-price">25/09/2022 10:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_phone_selling_jpg} />
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            <p className="product-seller">Total : $25.00</p>
                            
                            
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Confirm</button>
                                <button className="product-btn-chat">Reject</button>
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
                            <span className="product-price">25/09/2022 10:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_3_jpg} />
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            <p className="product-seller">Total : $25.00</p>
                            
                            
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Confirm</button>
                                <button className="product-btn-chat">Reject</button>
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
                            <span className="product-price">25/09/2022 10:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_sell_1_jpg} />
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            <p className="product-seller">Total : $25.00</p>
                            
                            
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Confirm</button>
                                <button className="product-btn-chat">Reject</button>
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
                            <span className="product-price">25/09/2022 10:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details">
                            <img className="dashboard-info-img" src={marketplace_shopping_2_jpg} />
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            <p className="product-seller">Total : $25.00</p>
                            
                            
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Confirm</button>
                                <button className="product-btn-chat">Reject</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    </div>  
                </div>

                <div className="dashboard-info-item">
                    <div className="dashboard-info-item-info">
                    <h3 style={{"textAlign":"center","marginBottom":"10px"}}>Sold and Ready for Shipment or Shipped</h3>
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product One(<span>Shipped</span>)
                            <span className="product-price">25/09/2022 13:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details-ship">
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            </div>
                            <div>
                            <p className="product-seller">Total : $25.00</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Ship</button>
                                <button className="product-btn-chat">Cancel</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Two(<span>Canceled</span>)
                            <span className="product-price">25/09/2022 13:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details-ship">
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            </div>
                            <div>
                            <p className="product-seller">Total : $25.00</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Ship</button>
                                <button className="product-btn-chat">Cancel</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>
                    
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Three(<span>Not Yet</span>)
                            <span className="product-price">25/09/2022 13:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details-ship">
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            </div>
                            <div>
                            <p className="product-seller">Total : $25.00</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Ship</button>
                                <button className="product-btn-chat">Cancel</button>
                            </p>
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div className="services-info-item">
                        <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p>
                            Product Four(<span>Shipped</span>)
                            <span className="product-price">25/09/2022 13:32</span>
                            </p>
                        </div>
                        </div>
                        <div className="dashboard-info-item-info">
                        <div className="product-details-ship">
                            <div>
                            <p className="product-seller">Buyer : Student One</p>
                            <p className="product-seller">Qty : 1, @ $25.00</p>
                            </div>
                            <div>
                            <p className="product-seller">Total : $25.00</p>
                            <p>
                                <button className="product-btn-chat"><Link to="/business/chat">Message</Link></button>
                                <button className="product-btn-chat">Ship</button>
                                <button className="product-btn-chat">Cancel</button>
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

export default BusinessDash;