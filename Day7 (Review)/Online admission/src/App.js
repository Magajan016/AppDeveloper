
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Pages1 from './Pages/Pages1';
// import { Dashboard } from '@mui/icons-material';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Login/>}/> */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/pages' element={<Pages1/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
