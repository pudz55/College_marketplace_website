import {Link} from 'react-router-dom';

import StudentNav from './StudentNav';

function StudentChat() {
    document.title='Student Chat: Market Place';
  return (
    <div>
        <StudentNav setActive='chat'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Your Chats and Messages
                </p>
            </div>
            <div class="dashboard-info">
                <div class="dashboard-item">

                <div class="dashboard-info-item">
                    <div class="">
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                    <p>
                                        New Message
                                    </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                    <div>
                                        <p class="product-description">Choose Business Owner to Chat With.</p>
                                        <p class="product-description">Reply to previous or incoming message through send Message on your Messages</p>
                                    </div>
                                </div>
                                <form>
                                    <div>
                                        <span>Message</span>
                                        <textarea rows="6" placeholder="Compose Message Here"></textarea>
                                    </div>

                                    <div>
                                        <span>Chat With </span>
                                        <select>
                                            <option value="">Chat With?</option>
                                            <option value="Busines1">Business Owner One</option>
                                            <option value="Busines2">Business Owner Two</option>
                                            <option value="Busines3">Business Owner Three</option>
                                            <option value="Busines4">Business Owner Four</option>
                                        </select>
                                    </div>
            
                                    <div>
                                        <button>Send Chat</button>
                                    </div>
                                    
                                </form>

                            </div>  
                        </div>

                            
                    </div>
                </div>

                <div class="dashboard-info-item">
                    <div class="">
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>

                    </div>
                </div>

                <div class="dashboard-info-item">
                    <div class="">
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
                                </div>
                            </div>  
                        </div>
                        <div class="services-info-item">
                            <div class="services-info-item-title">
                                <div class="post-info-item-title-info">
                                <p>
                                    Business Owner One (<span class="messages">0</span>)
                                    <span class="product-price">25/09/2022 14:02</span>
                                </p>
                                </div>
                            </div>
                            <div class="dashboard-info-item-info">
                                <div class="post-details">
                                <div>
                                    <p class="product-description">This Product provides a clear vision during the night or at least helps</p>
                                </div>
                                <p>
                                    <button class="product-btn-chat">Send Message</button>
                                    <button class="product-btn-chat">Delete</button>
                                </p>
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

export default StudentChat;