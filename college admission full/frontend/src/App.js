
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Home1 from './Components/Admin/Dashboard/Home';

import Dashboard from './Pages/Dashboard';
import Pages1 from './Pages/Pages1';
import Profile from './Pages/Profile';
import Footer from './Components/User/Footer';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import HomeNavbar from './Components/User/HomeNavbar';
import About from './Pages/About';
import Homemain from './Pages/Homemain';
import User from './Components/Admin/User';
import Navbar1 from './Components/User/Navbar/Navbar1';
import Login1 from './Components/User/Applocationform/Login1';
import Counter from './Pages/Counter';
import Navbar2 from './Components/User/Navbar/Navbar2';
import Forget from './Pages/Forget';
import Sidebar from './Pages/Sidebar';
import Sidebar1 from './Components/Admin/Dashboard/Sidebar1';
import MainDashboard from './Components/Admin/MainDashboard';
import Student from './Components/Admin/Dashboard/Student';
import LoginPage from './Pages/Common/LoginPage';
import Navbar from './Components/Admin/Dashboard/Navbar';
import AdminAuth from './Pages/AdminAuth';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* {Login}/ */}
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/dashboard/login' element={<Login1/>}/>
          {/* Login */}
          {/* Start */}
          <Route  path='/signup' element={<Signup/>}/>
          {/* end */}
          <Route  path='/count' element={<Counter/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route element={<AdminAuth/>}/>
          <Route path='/admin/navbar' element={<Navbar/>}>
          </Route>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route path='dashboard' element={<Home1/>}/>
          <Route  path='/pages' element={<User/>}/>
          <Route  path='/projects' element={<Profile/>}/>
          <Route  path='/analytics' element={<Pages1/>}/>
          <Route  path='/inbox' element={<Pages1/>}/>
          <Route  path='/profile' element={<Profile/>}/>
          <Route  path='/setting' element={<Pages1/>}/>
          <Route  path='/terms' element={<Terms/>}/>
          <Route  path='/side1' element={<HomeNavbar/>}/>
          <Route  path='/side' element={<Footer/>}/>
          <Route  path='/privacy' element={<Privacy/>}/>
          <Route  path='/faq' element={<Faq/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/home1' element={<Homemain/>}/>
          <Route path='/nav1' element={<Navbar1/>}/>
          <Route path='/nav2' element={<Navbar2/>}/>
          <Route path='/forget' element={<Forget/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/sidebar1' element={<Sidebar1/>}/>
          <Route path='/maindashboard' element={<MainDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
