import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { Routes, Route, Link } from "react-router-dom";
import Registration from './Component/Registration';
import DAshboard from './Component/DAshboard';

function App() {
  return (
    <div>
      <Routes>
       
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
           <Route path='/dashboard' element={<DAshboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
