import React, { useState, useEffect, useContext } from "react";
import UserDataService from "../../../services/UserService";
import getAge from "../../../helpers/getAge";
import { useParams } from "react-router-dom";
import Language from "../../../contexts/LanguageContext/LanguageContext.js";

const UserDetail = () => {
  const Lang = useContext(Language);
  const T = Lang.keys["Users"];
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
                        <th scope="col">{T["1"]}</th>
                        <th scope="col">{T["2"]}</th>
                        <th scope="col">{T["3"]}</th>
                        <th scope="col">{T["4"]}</th>
                        <th scope="col">{T["5"]}</th>
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
          <p>{T["17"]}</p>
        </div>
      )}
    </div>
  );
};
export default UserDetail;