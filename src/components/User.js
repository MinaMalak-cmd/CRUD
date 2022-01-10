import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";

const User = props => {
  const initialUserState = {
    id: null,
    name: "",
    birthDate: "",
    skills: ""
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const {id, name, birthDate, skills} = currentUser;

  const getUser = id => {
    UserDataService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentUser.id,
      title: currentUser.title,
      description: currentUser.description,
      published: status
    };
    /*
    UserDataService.update(currentUser.id, data)
      .then(response => {
        setCurrentUser({ ...currentUser});
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      */
  };

  const updateUser = () => {
    UserDataService.update(currentUser.id, currentUser)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
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
              <strong>Enter birthdate on the form of dd-mm-yyyy</strong>
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
              <strong>Enter skills on the form of comma separated skills</strong>
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