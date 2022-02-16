import React, { useState, useContext } from "react";
import UserDataService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import Language from "../../contexts/LanguageContext/LanguageContext.js";

const AddUser = () => {
  const initialUserState = {
    id: null,
    name: "",
    birthDate: "",
    skills: ""
  };
  const [User, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const Lang = useContext(Language);
  const T = Lang.keys["Users"];

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: User.name,
      birthDate: User.birthDate,
      skills: User.skills
    };

    UserDataService.post(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          birthDate: response.data.birthDate,
          skills: response.data.skills
        });
        setSubmitted(true);
      })
      .catch(e => {
        //handle error logic here
      });
  };
  return (
      <div className="col-sm-12 d-flex flex-center">
        <div className="submit-form col-sm-6 m-auto">
            {submitted ? (
            <div>
                <h4>{T["18"]}</h4>
                <button className="btn btn-success" onClick={()=> navigate('/')}>
                {T["19"]}
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="name">{T["2"]}</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={User.name}
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
                    value={User.birthDate}
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
                    value={User.skills}
                    onChange={handleInputChange}
                />
                </div>
                <button onClick={saveUser} className="btn btn-success">
                {T["20"]}
                </button>
            </div>
            )}
        </div>
      </div>
  );
};

export default AddUser;
