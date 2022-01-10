import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UsersList";

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
      <Switch>
        <Route exact path={["/", "/Users"]} component={UsersList} />
        <Route exact path="/add" component={AddUser} />
        <Route path="/Users/:id" component={User} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
