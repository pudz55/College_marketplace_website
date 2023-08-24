import {Link} from 'react-router-dom';
import { useState } from 'react';
function Nav({setActive}) {
    const [collapse,setCollapse]=useState(false);
  return (
    <>
        <nav>
            <ul>
                <li className={`${setActive===''?"active":""}`}><Link to="/">Market Place</Link></li>
            </ul>

            <ul className="menu">
                <li className={`${setActive===''?"active":""}`}><Link to="/">Home</Link></li>
                <li className={`${setActive==='about'?"active":""}`}><Link to="/about">About</Link></li>
                <li className={`${setActive==='services'?"active":""}`}><Link to="/services">Services</Link></li>
                <li className={`${setActive==='contact'?"active":""}`}><Link to="/contact">Contact</Link></li>
                <li className={`${setActive==='blog'?"active":""}`}><Link to="/blog">Blog</Link></li>
            </ul>

            <ul>
                <li><Link to="#">Cart</Link></li>
                <li className={`${setActive==='login'?"active":""}`}><Link to="/login">Login/Register</Link></li>
            </ul>

            <ul className={`collapse ${collapse?"":"active"}`} onClick={e => (setCollapse(!collapse))}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </ul>

        </nav>

        <ul className={`menu-collapse ${collapse?"active":""}`} id="menu-collapse">
            <li className={`${setActive===''?"active":""}`}><Link to="/">Home</Link></li>
            <li className={`${setActive==='about'?"active":""}`}><Link to="/about">About</Link></li>
            <li className={`${setActive==='services'?"active":""}`}><Link to="/services">Services</Link></li>
            <li className={`${setActive==='contact'?"active":""}`}><Link to="/contact">Contact</Link></li>
            <li className={`${setActive==='blog'?"active":""}`}><Link to="/blog">Blog</Link></li>
        </ul> 
    </>
  );
}

export default Nav;
