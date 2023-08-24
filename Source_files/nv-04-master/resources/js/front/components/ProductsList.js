import {useState} from 'react';
import {Link} from 'react-router-dom';
import marketplace_sell_3_jpg from "../images/marketplace-sell-3.jpg";
import NewProducts from "./NewProducts";


function ProductsList(params = {}) {
    document.title = 'Student Add Products: Market Place';
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(countCart);
    const [hasProducts, setHasProducts] = useState(false);
    if (!hasProducts) {
        //get products from api
        postData({resource: "product_list", own: params.own, user_id: params.user_id}, function (resp) {
            if (resp.error) {
                setHasProducts(false);
                return;
            }
            setHasProducts(true);
            setProducts(resp);
            //save products to local storage
            localStorage.setItem('products', JSON.stringify(resp));
        });
    }

    function editProduct(event) {
        let product_id = event.target.getAttribute('data-id');
        //dispatch event to edit product
        window.dispatchEvent(new CustomEvent('editProduct', {detail: {id: product_id}}));

    }

    function deleteProduct(event) {
        let product_id = event.target.getAttribute('data-id');
        //confirm delete
        if (!confirm('Are you sure you want to delete this post?')) {
            return;
        }
        post({resource: "product_delete", id: product_id}, function (resp) {
            if (resp.error) {
                alert(resp.error);
                return;
            }
            //remove post from local storage
            let products = localStorage.getItem('products');
            if (products === null) {
                products = [];
            } else {
                products = JSON.parse(products);
            }
            let new_products = products.filter(post => post.id !== product_id);
            localStorage.setItem('products', JSON.stringify(new_products));
            setProducts(new_products);
        })

    }

    function handleCart(event) {
        let product_id = event.target.getAttribute('data-id');
        addToCart(parseInt(product_id));
    }

    return (<div>
        {!hasProducts ? (<div className="dashboard-info-item">
            <div className="">
                <div className="services-info-item">
                    <div className="services-info-item-title">
                        <div className="post-info-item-title-info">
                            <p style={{"textAlign": "center"}}>
                                No Products Yet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<div className="services-info-item">
            <div className="services-info-item-title">
                <div className="post-info-item-title-info">
                    <p>
                        {(params.own ? "My" : "Latest") + " Products"}
                    </p>
                </div>
            </div>
            <div className="dashboard-info">
                <div className="dashboard-item">
                    <div className="dashboard-info-item">
                        {params.own ? <NewProducts/> : ''}
                    </div>
                    <div className="dashboard-info-item">

                        {products.map((product, index) => (

                            <div className="services-info-item" key={index}>
                                <div className="services-info-item-title">
                                    <div className="post-info-item-title-info">
                                        <p>
                                            By
                                            <span className="product-price">{product.user.names}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="dashboard-info-item-info">
                                    <div className="product-details">
                                        <img className="dashboard-info-img"
                                             src={product.image ? product.image : marketplace_sell_3_jpg}/>
                                        <div>
                                            <p className="product-description">{product.title}</p>
                                            <p className="product-seller">By :
                                                <button className="product-btn-chat"><Link
                                                    to={"/student/" + product.user_id}>{product.user.names}</Link>
                                                </button>
                                            </p>
                                            <p>
                                                {product.user.id === JSON.parse(localStorage.getItem('mercadoraccount'))[0]['id'] ? (
                                                    <p>
                                                        <button className="product-btn-chat" data-id={product.id}
                                                                onClick={editProduct}>Edit
                                                        </button>
                                                        <button className="product-btn-chat" data-id={product.id}
                                                                onClick={deleteProduct}>Delete
                                                        </button>
                                                    </p>) : ''}
                                                <button className="product-btn-chat" data-id={product.id}
                                                        onClick={handleCart}>Cart (<span
                                                    className="cart">{cartCount}</span>)
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>


        </div>)}
    < /div>);
}

export default ProductsList;
