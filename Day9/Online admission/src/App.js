
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Pages1 from './Pages/Pages1';
import Profile from './Pages/Profile';
import Sidebar from './Pages/Sidebar';
import Footer from './Components/User/Footer';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import HomeNavbar from './Components/User/HomeNavbar';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/dashboard/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/pages' element={<Pages1/>}/>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
