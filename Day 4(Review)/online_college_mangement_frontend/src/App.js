
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
