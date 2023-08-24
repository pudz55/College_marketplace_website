
import SuperAdminNav from './SuperAdminNav';
import StudentsList from "../elems/StudentsList";



function SuperAdminSchools() {
    document.title='Super Admin Schools: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='schools'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Manage Schools
                </p>
            </div>
                <StudentsList type={'school'} own={false} is_sa={true}/>



            </section>
        </div>
    </div>
  );
}

export default SuperAdminSchools;
