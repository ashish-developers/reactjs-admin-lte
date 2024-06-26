import { Switch, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './assets/dist/plugins/fontawesome-free/css/all.min.css';
import './assets/dist/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import './assets/css/adminlte.css'
import './App.css';
import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import Home from './modules/app/Home'
import DashboardComponent from './modules/dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/Login" element={<Login/>} > Login</Route> */}
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
        <Route path="/" exact element={<Home/>} />

        <Route path="/user/dashboard" element={<DashboardComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
