import React, { useState, useEffect } from "react";
import UserDataService from "../../../services/UserService";
import getAge from "../../../helpers/getAge";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const initialUserState = {
        id: null,
        name: "",
        birthDate: "",
        skills: ""
    };
  const currentParams = useParams();
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const {name, birthDate, skills} = currentUser;
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

  return (
    <div>
      {currentParams.id ? (
        <div className="edit-form">
          <h4>User</h4>
          <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birth date</th>
                        <th scope="col">Age</th>
                        <th scope="col">Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">{currentParams.id}</td>
                        <td>{name}</td>
                        <td>{birthDate}</td>
                        <td>{getAge(birthDate)}</td>
                        <td>{skills}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      ) : (
        <div>
          <br />
          <p>Please Choose right user...</p>
        </div>
      )}
    </div>
  );
};
export default UserDetail;