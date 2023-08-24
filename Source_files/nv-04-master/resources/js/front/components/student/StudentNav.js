import {Link, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthButton from "../AuthButton";
function StudentNav({setActive}) {
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
            if(mercadoraccount[0]['role']==="student"){
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
                <li className={`${setActive===''?"active":""}`}><Link to="/student/dashboard">Market Place</Link></li>
            </ul>

            <ul className ="menu">
{/*
                <li className={`${setActive==='chat'?"active":""}`}><Link to="/student/chat">Chat</Link></li>
*/}
                <li className={`${setActive==='posts'?"active":""}`}><Link to="/student/view_posts">Posts</Link></li>
                <li className={`${setActive==='clubs'?"active":""}`}><Link to="/student/view_clubs">Clubs</Link></li>
                <li className={`${setActive==='shop'?"active":""}`}><Link to="/student/buy_products">Shop</Link></li>
                <li className={`${setActive==='students'?"active":""}`}><Link to="/student/student_profile">Students</Link></li>
            </ul>

            <ul>
                <li className={`${setActive==='cart'?"active":""}`}><Link to="/cart">Cart <span className="cart"> 0</span></Link></li>
               {/* <li className={`${setActive==='profile'?"active":""}`}><Link to="/student/profile">{mercadoraccount[0] && mercadoraccount[0]['names']}</Link></li>
                <li ><Link to="../login">Logout</Link></li>*/}
            </ul>
            <AuthButton />

            <ul className={`collapse ${collapse?"":"active"}`} onClick={e => (setCollapse(!collapse))}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </ul>

        </nav>

        <ul className={`menu-collapse ${collapse?"active":""}`} id="menu-collapse">
            <li className={`${setActive===''?"active":""}`}><Link to="/student/dashboard">Home</Link></li>
{/*
            <li className={`${setActive==='chat'?"active":""}`}><Link to="/student/chat">Chat</Link></li>
*/}
            <li className={`${setActive==='posts'?"active":""}`}><Link to="/student/view_posts">Posts</Link></li>
            <li className={`${setActive==='clubs'?"active":""}`}><Link to="/student/view_clubs">Clubs</Link></li>
            <li className={`${setActive==='shop'?"active":""}`}><Link to="/student/buy_products">Shop</Link></li>
            <li className={`${setActive==='students'?"active":""}`}><Link to="/student/student_profile">Students</Link></li>
        </ul>

    </>
  );
}

export default StudentNav;
