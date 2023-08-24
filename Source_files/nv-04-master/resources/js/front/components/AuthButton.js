import {Link} from 'react-router-dom';
import {useState} from 'react';

function AuthButton({setActive}) {
    const [collapse, setCollapse] = useState(false);
    let mercadoraccount = null;
    if (localStorage.getItem('mercadoraccount') === null) {
        mercadoraccount = false
    }
    else {
        mercadoraccount = JSON.parse(localStorage.getItem('mercadoraccount'))
    }

    function logout() {
        localStorage.removeItem('mercadoraccount');
        window.location.reload();
    }

    return (<>
        {mercadoraccount ?
            <ul>
                <li className={`${setActive==='profile'?"active":""}`}><Link to={"/user/"+mercadoraccount[0]['id']}>{mercadoraccount[0] && mercadoraccount[0]['names']}</Link></li>
                <li ><Link to="#" onClick={logout}>Logout</Link></li>
            </ul> :
        ''}
        </>);
}

export default AuthButton;
