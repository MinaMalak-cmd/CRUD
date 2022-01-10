import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { useParams, useNavigate } from "react-router-dom";

const User = props => {
  const initialUserState = {
    id: null,
    name: "",
    birthDate: "",
    skills: ""
  };
  const navigate = useNavigate();
  const currentParams = useParams();
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const getUser = id => {
    UserDataService.get(id)
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(e => {
        //handle error logic here
      });
  };

  useEffect(() => {
    getUser(currentParams.id);
  }, [currentParams.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const updateUser = () => {
    UserDataService.update(currentUser.id, currentUser)
      .then(() => {
        navigate(`/`)
      })
      .catch(e => {
        //handle error logic here
      });
  };
  return (
    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">birthDate</label>
              <br />
              <strong>Enter birthdate on the form of dd-mm-yyyy</strong>
              <br />
              <input
                type="text"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={currentUser.birthDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">skills</label>
              <br />
              <strong>Enter skills on the form of comma separated skills</strong>
              <br />
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                value={currentUser.skills}
                onChange={handleInputChange}
              />
            </div>
          </form>      
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUser}
            className="btn btn-primary" 
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a User...</p>
        </div>
      )}
    </div>
  );
};
export default User;