import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FileUploader from "./FileUploader";


function NewProducts() {
    document.title = 'Student Add Products: Market Place';

    let mercadoraccount = localStorage.getItem('mercadoraccount');
    if (mercadoraccount === null) {
        mercadoraccount = false
    } else {
        mercadoraccount = JSON.parse(mercadoraccount)
    }

    const [businessname, setBusinessName] = useState('');
    const [productname, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [send, setSend] = useState(false);
    const [hasProduct, setHasProduct] = useState(false);
    const [products, setProducts] = useState([]);

    //listen for edit product event
    window.addEventListener('editProduct', function (e) {
        let product_id = e.detail.id;
        //get product from local storage
        let products = localStorage.getItem('products');
        if (products === null) {
            products = [];
        } else {
            products = JSON.parse(products);
        }
        let product = products.filter(product => product.id === product_id);
        if (product.length > 0) {
            product = product[0];
            //set product details
            setBusinessName(product.businessname);
            setProductName(product.productname);
            setPrice(product.price);
            setQuantity(product.quantity);
            setDescription(product.description);
            setImage(product.image);
            setHasProduct(true);
        }
    });

    if (!hasProduct) {
        //get products from api
        postData({resource: "product_list"}, function (resp) {
            if (resp.error) {
                setHasProduct(false);
                return;
            }
            setHasProduct(true);
            setProducts(resp);
            //save posts to local storage
            localStorage.setItem('products', JSON.stringify(resp));
        }).catch(error => {
            setSend("API: " + error)
        })
    }
    const createProduct = (event) => {
        event.preventDefault();
        setSend("Creating Product...");
        post({
            resource: "product_create",
            businessname: businessname,
            productname: productname,
            price: price,
            quantity: quantity,
            description: description,
            image: image
        }, function (resp) {
            if (resp.error) {
                setSend(resp.error);
                return;
            }
            //add product to local storage
            let products = localStorage.getItem('products');
            if (products === null) {
                products = [];
            } else {
                products = JSON.parse(products);
            }
            products.push(resp);
            localStorage.setItem('products', JSON.stringify(products));
            setProducts(products);
            setBusinessName('');
            setProductName('');
            setPrice('');
            setQuantity('');
            setDescription('');
            setImage('');
            setSend(false);
        }).catch(error => {
            setSend("API: " + error)
        })
    }

    return (
        <div>

            <div className="dashboard-info-item">
                <div className="">
                    <div className="services-info-item">
                        <div className="services-info-item-title">
                            <div className="post-info-item-title-info">
                                <p style={{"textAlign": "center"}}>
                                    Create your new Product for selling here
                                </p>
                            </div>
                        </div>
                        <div className="dashboard-info-item-info">
                            <div className="product-details">
                                <div>
                                    <p>Please all information reuired for your new Product. Include prices and
                                        quantity. </p>
                                    <p>To add stock, then Update the product and indicate new stock</p>

                                </div>
                            </div>
                            <form onSubmit={createProduct}>
                                <div>
                                    <span>Business Name</span>
                                    <input type="text" value={businessname}
                                           onChange={(e) => setBusinessName(e.target.value)}
                                           placeholder="Business Name"/>
                                </div>

                                <div>
                                    <span>Product Name</span>
                                    <input type="text" value={productname}
                                           onChange={(e) => setProductName(e.target.value)} placeholder="Product Name"/>
                                </div>

                                <div>
                                    <span>Price </span>
                                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}
                                           placeholder="Price per @"/>
                                </div>

                                <div>
                                    <span>Quantity</span>
                                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                           placeholder="Product Qty"/>
                                </div>

                                <div>
                                    <span>Description</span>
                                    <textarea rows="4" value={description}
                                              onChange={(e) => setDescription(e.target.value)}
                                              placeholder="Product Description"></textarea>
                                </div>

                                <div>
                                    <span>Image </span>
                                    <FileUploader/>
                                </div>

                                {send &&
                                    <div style={{
                                        "backgroundColor": "grey",
                                        "color": "white",
                                        "padding": "10px",
                                        "borderRadius": "10px"
                                    }}>
                                        <span style={{"textAlign": "center"}}>{send}</span>
                                    </div>
                                }

                                <div>
                                    <button>Save New Product</button>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewProducts;
