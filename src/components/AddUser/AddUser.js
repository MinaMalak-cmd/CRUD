import React, { useState } from "react";
import UserDataService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

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
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={()=> navigate('/')}>
                   Redirect to home
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="name">name</label>
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
                <label htmlFor="birthDate">birthDate</label>
                <br />
                <strong>Enter birthdate on the form of dd-mm-yyyy</strong>
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
                <label htmlFor="skills">skills</label>
                <br />
                <strong>Enter skills on the form of comma separated skills</strong>
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
                   Submit
                </button>
            </div>
            )}
        </div>
      </div>
  );
};

export default AddUser;
