import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { Link } from "react-router-dom";

const UsersList = () => {
    const [Users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    useEffect(() => {
      retrieveUsers();
    }, []);
    const retrieveUsers = () => {
      UserDataService.getAll()
        .then(response => {
          setUsers(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const refreshList = () => {
      retrieveUsers();
      setCurrentUser(null);
      setCurrentIndex(-1);
    };
  
    const setActiveUser = (User, index) => {
      setCurrentUser(User);
      setCurrentIndex(index);
    };
    return (
        <div className="list row">
        <div className="col-md-6">
          <h4>Users List</h4>
  
          <ul className="list-group">
            {Users &&
              Users.map((User, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveUser(User, index)}
                  key={index}
                >
                  {User.title}
                </li>
              ))}
          </ul>
  
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllUsers}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentUser.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentUser.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentUser.published ? "Published" : "Pending"}
              </div>
  
              <Link
                to={"/Users/" + currentUser.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default UsersList;