import './App.css';
import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import {
  Route,
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
        {/* <li className="nav-item">
          <Link to={"/Users"} className="nav-link">
            Users
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li> */}
      </div>
    </nav>

    <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<UsersList />} />
            <Route exact path="/Users" element={<UsersList />} />
            <Route path="/add" element={<AddUser />} />  
            <Route path="/UpdateUser/:id" element={<User />} />
            <Route path="/Users/:id" element={<UserDetail />} />       
          </Routes>
    </div>
  </div>
  );
}

export default App;
