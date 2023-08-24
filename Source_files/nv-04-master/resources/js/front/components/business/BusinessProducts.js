import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';




import marketplace_phone_selling_jpg from '../../images/marketplace-phone-selling.jpg';
import marketplace_sell_1_jpg from '../../images/marketplace-sell-1.jpg';
import marketplace_sell_3_jpg from '../../images/marketplace-sell-3.jpg';
import marketplace_shopping_2_jpg from '../../images/marketplace-shopping-2.jpg';
import NewProducts from '../NewProducts';
import BusinessNav from './BusinessNav';
import ProductsList from "../ProductsList";



function BusinessProducts() {
    document.title='Business Owner Products: Market Place';
    let mercadoraccount=localStorage.getItem('mercadoraccount');
    if(mercadoraccount===null){
        mercadoraccount=false
    }
    else{
        mercadoraccount=JSON.parse(mercadoraccount)
    }

    const [name,setProductName]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');

    const [businessProducts, getproductss]=useState([])
    const getproducts = () => {
        axios.post(process.env.REACT_APP_API+"getproducts.php").then((response)=>{
            getproductss(response.data)
        }).catch(error=>console.error('Error'))
    }
    useEffect(()=> {
        getproducts();
    },[]);
  return (
    <div>
        <BusinessNav setActive='products'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>    Create, Update and Manage Your Products
                </p>
            </div>
            <ProductsList own={true}/>
            </section>
        </div>
    </div>
  );
}

export default BusinessProducts;



