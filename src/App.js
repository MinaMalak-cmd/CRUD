import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";
import {
  Route,
  BrowserRouter as Router,
  Routes,Link
} from "react-router-dom";
function App() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/Users" className="navbar-brand">
        Mina
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/Users"} className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      {/* <Routes>
        <Route exact path={["/", "/Users"]} >
           <UsersList />
        </Route>
         <Route exact path="/add" children={<AddUser />} />
        <Route path="/Users/:id" children={<User />} /> 
      </Routes> */}
       {/* <Router> */}
          <Routes>
            <Route exact path="/" element={<UsersList />} />
            <Route path="/add" element={<AddUser />} />  
            <Route path="/Users/:id" element={<User />} />       
          </Routes>
        {/* </Router> */}
    </div>
  </div>
  );
}

export default App;
