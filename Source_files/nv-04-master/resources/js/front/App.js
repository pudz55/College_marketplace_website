import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Business from './components/Business';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Service from './components/Service';
import ServiceShopingCenter from './components/ServiceShopingCenter';


import StudentAddProducts from './components/student/StudentAddProducts';
import StudentBuyProducts from './components/student/StudentBuyProducts';
import StudentChat from './components/student/StudentChat';
import StudentDash from './components/student/StudentDashboard';
import StudentJoinClubs from './components/student/StudentJoinClubs';
import StudentProfile  from './components/elems/StudentProfile';
import StudentStudentProfile from './components/student/StudentStudentProfiles';
import StudentViewClubs from './components/student/StudentViewClubs';
import StudentViewPosts from './components/student/StudentViewPosts';
import StudentViewStudent from './components/student/StudentViewStudent';
import StudentAddClub from './components/student/StudentAddClub';
import StudentAddPost from './components/student/StudentAddPost';


import BusinessDash from './components/business/BusinessDash';
import BusinessProfile from './components/business/BusinessProfile';
import BusinessProducts from './components/business/BusinessProducts';
import BusinessAdverts from './components/business/BusinessAdverts';
import BusinessChat from './components/business/BusinessChat';


import SchoolDash from './components/school/SchoolDash';
import SchoolPosts from './components/school/SchoolPosts';
import SchoolBusiness from './components/school/SchoolBusiness';
import SchoolProfile from './components/school/SchoolProfile';
import SchoolStudentProfiles from './components/school/SchoolStudentProfiles';
import SchoolClubs from './components/school/SchoolClubs';
import SchoolBusinessProfile from './components/school/SchoolBusinessProfile';
import SchoolProducts from './components/school/SchoolProducts';
import SchoolViewStudent from './components/school/SchoolViewStudent';
import SchoolAdverts from './components/school/SchoolAdverts';
import SchoolClubMembers from './components/school/SchoolClubMembers';


import SuperAdminDash from './components/superadmin/SuperAdminDash';
import SuperAdminBusiness from './components/superadmin/SuperAdminBusiness';
import SuperAdminViewStudent from './components/superadmin/SuperAdminViewStudent';
import SuperAdminProducts from './components/superadmin/SuperAdminProducts';
import SuperAdminAdverts from './components/superadmin/SuperAdminAdverts';
import SuperAdminBusinessProfile from './components/superadmin/SuperAdminBusinessProfile';
import SuperAdminPosts from './components/superadmin/SuperAdminPosts';
import SuperAdminClubs from './components/superadmin/SuperAdminClubs';
import SuperAdminStudentProfiles from './components/superadmin/SuperAdminStudentProfiles';
import SuperAdminProfile from './components/superadmin/SuperAdminProfile';
import SuperAdminClubMembers from './components/superadmin/SuperAdminClubMembers';
import SuperAdminSchools from './components/superadmin/SuperAdminSchools';
import SuperAdminQueries from './components/superadmin/SuperAdminQueries';
import SuperAdminUsers from './components/superadmin/SuperAdminUsers';
import School from "./components/School";
import Cart from "./components/elems/Cart";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<Service/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/reset' element={<Reset/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/business' role={'business'} element={<Business/>}/>
                    <Route path='/school' role={'school'} element={<School/>}/>
                    <Route path='/service_shopping_center' element={<ServiceShopingCenter/>}/>


                    {/*
              /business/dashboard
              /school/dashboard
              /superadmin/dashboard
             */}

                    <Route path='/student/dashboard' element={<StudentDash/>}/>
                    <Route path='/student/add_products' element={<StudentAddProducts/>}/>
                    <Route path='/student/buy_products' element={<StudentBuyProducts/>}/>
                    <Route path='/student/chat' element={<StudentChat/>}/>
                    <Route path='/student/view_student' element={<StudentViewStudent/>}/>
                    <Route path='/student/join_clubs' element={<StudentJoinClubs/>}/>
                    <Route path='/student/view_posts' element={<StudentViewPosts/>}/>
                    <Route path='/student/view_clubs' element={<StudentViewClubs/>}/>
                    <Route path='/student/student_profile' element={<StudentStudentProfile/>}/>
                    <Route path='/student/profile' element={<StudentProfile/>}/>
                    <Route path='/student/add_posts' element={<StudentAddPost/>}/>
                    <Route path='/student/add_club' element={<StudentAddClub/>}/>


                    <Route path='/business/dashboard' element={<BusinessDash/>}/>
                    <Route path='/business/profile' element={<BusinessProfile/>}/>
                    <Route path='/business/products' element={<BusinessProducts/>}/>
                    <Route path='/business/view_adverts' element={<BusinessAdverts/>}/>
                    <Route path='/business/chat' element={<BusinessChat/>}/>


                    <Route path='/school/dashboard' element={<SchoolDash/>}/>
                    <Route path='/school/businesses' element={<SchoolBusiness/>}/>
                    <Route path='/school/view_student' element={<SchoolViewStudent/>}/>
                    <Route path='/school/products' element={<SchoolProducts/>}/>
                    <Route path='/school/view_adverts' element={<SchoolAdverts/>}/>
                    <Route path='/school/business_profile' element={<SchoolBusinessProfile/>}/>
                    <Route path='/school/view_posts' element={<SchoolPosts/>}/>
                    <Route path='/school/view_clubs' element={<SchoolClubs/>}/>
                    <Route path='/school/student_profile' element={<SchoolStudentProfiles/>}/>
                    <Route path='/school/profile' element={<SchoolProfile/>}/>
                    <Route path='/school/view_club_member' element={<SchoolClubMembers/>}/>


                    <Route path='/superadmin/dashboard' element={<SuperAdminDash/>}/>
                    <Route path='/superadmin/businesses' element={<SuperAdminBusiness/>}/>
                    <Route path='/superadmin/view_student' element={<SuperAdminViewStudent/>}/>
                    <Route path='/superadmin/products' element={<SuperAdminProducts/>}/>
                    <Route path='/superadmin/view_adverts' element={<SuperAdminAdverts/>}/>
                    <Route path='/superadmin/business_profile' element={<SuperAdminBusinessProfile/>}/>
                    <Route path='/superadmin/view_posts' element={<SuperAdminPosts/>}/>
                    <Route path='/superadmin/view_clubs' element={<SuperAdminClubs/>}/>
                    <Route path='/superadmin/student_profile' element={<SuperAdminStudentProfiles/>}/>
                    <Route path='/superadmin/profile' element={<SuperAdminProfile/>}/>
                    <Route path='/superadmin/view_club_member' element={<SuperAdminClubMembers/>}/>
                    <Route path='/superadmin/schools' element={<SuperAdminSchools/>}/>
                    <Route path='/superadmin/queries' element={<SuperAdminQueries/>}/>
                    <Route path='/superadmin/users' element={<SuperAdminUsers/>}/>



                    <Route path='/club/:id' element={<StudentJoinClubs/>}/>
                    <Route path='/student/:id' element={<StudentProfile/>}/>
                    <Route path='/user/:id' element={<StudentProfile/>}/>
                    <Route path='/cart/' element={<Cart/>}/>


                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
