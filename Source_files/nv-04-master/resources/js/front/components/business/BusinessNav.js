import {Link, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthButton from "../AuthButton";
function BusinessNav({setActive}) {
    const [collapse,setCollapse]=useState(false);
    const [redirect,setRedirect]=useState(false);

    let mercadoraccount=null;
    if(localStorage.getItem('mercadoraccount')===null){
        mercadoraccount=false
    }
    else{
        mercadoraccount=JSON.parse(localStorage.getItem('mercadoraccount'))
    }


    useEffect(() => {
        getloggeduser()
    }, [mercadoraccount]);

    const getloggeduser = () =>{
        if(mercadoraccount){
            if(mercadoraccount[0]['role']==="business"){
                setRedirect(false)
            }
            else{
                setRedirect(true)
            }
        }
        else{
            setRedirect(true)
        }

    }

    if(redirect){
        return <Navigate to='/login' />
    }
  return (
    <>
        <nav>
            <ul>
                <li className={`${setActive===''?"active":""}`}><Link to="/business/dashboard">Market Place</Link></li>
            </ul>

            <ul class="menu">
                <li className={`${setActive===''?"active":""}`}><Link to="/business/dashboard">Home</Link></li>
{/*
                <li className={`${setActive==='chat'?"active":""}`}><Link to="/business/chat">Chat</Link></li>
*/}
                <li className={`${setActive==='adverts'?"active":""}`}><Link to="/business/view_adverts">Adverts</Link></li>
                <li className={`${setActive==='products'?"active":""}`}><Link to="/business/products">Products</Link></li>
            </ul>

           <AuthButton />

            <ul className={`collapse ${collapse?"":"active"}`} onClick={e => (setCollapse(!collapse))}>
                <div class="bars"></div>
                <div class="bars"></div>
                <div class="bars"></div>
            </ul>

        </nav>

        <ul className={`menu-collapse ${collapse?"active":""}`} id="menu-collapse">
            <li className={`${setActive===''?"active":""}`}><Link to="/business/dashboard">Home</Link></li>
{/*
                <li className={`${setActive==='chat'?"active":""}`}><Link to="/business/chat">Chat</Link></li>
*/}
                <li className={`${setActive==='adverts'?"active":""}`}><Link to="/business/view_adverts">Adverts</Link></li>
                <li className={`${setActive==='products'?"active":""}`}><Link to="/business/products">Products</Link></li>
        </ul>

    </>
  );
}

export default BusinessNav;
