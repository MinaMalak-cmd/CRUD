import React, { useState, useEffect,useContext } from "react";
import UserDataService from "../../../services/UserService";
import { useParams, useNavigate } from "react-router-dom";
import Language from "../../../contexts/LanguageContext/LanguageContext.js";

const User = () => {
  const initialUserState = {
    id: null,
    name: "",
    birthDate: "",
    skills: ""
  };
  console.log("rendered")
  const Lang = useContext(Language);
  const T = Lang.keys["Users"];
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
          <h4>{T["12"]}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">{T["2"]}</label>
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
              <label htmlFor="birthDate">{T["3"]}</label>
              <br />
              <strong>{T["14"]}</strong>
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
              <label htmlFor="skills">{T["5"]}</label>
              <br />
              <strong>{T["15"]}</strong>
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
            {T["16"]}
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>{T["17"]}</p>
        </div>
      )}
    </div>
  );
};
export default User;