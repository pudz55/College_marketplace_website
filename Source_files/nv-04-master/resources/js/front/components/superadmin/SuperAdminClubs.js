
import SuperAdminNav from './SuperAdminNav';
import ClubsList from "../ClubsList";



function SuperAdminClubs() {
    document.title='Super Admin Clubs: Market Place';
  return (
    <div>
        <SuperAdminNav setActive='clubs'/>
        <div id="roles">
            <section class="dashboard">
            <div class="dashboard-title">
                <p style={{"textAlign": "center"}}>Clubs and Members
                </p>
            </div>
            <ClubsList own_clubs={false} is_sa={true}/>


            </section>
        </div>
    </div>
  );
}

export default SuperAdminClubs;
