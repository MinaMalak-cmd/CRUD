import React, { useState, useEffect, useContext } from "react";
import Language from "../../../contexts/LanguageContext/LanguageContext";
import UserDataService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";
import getAge from "../../../helpers/getAge";
import getSkills from "../../../helpers/getSkills";

const UsersList = () => {
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();
  const Lang = useContext(Language);
  const T = Lang.keys["Users"];

  useEffect(() => {
    retrieveUsers();
  }, []);
  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        //handle error logic here
      });
  };

  const refreshList = () => {
    retrieveUsers();
  };
  const deleteUser = (id) => {
    UserDataService.delete(id)
      .then((response) => {
        refreshList();
      })
      .catch((e) => {
        //handle error logic here
      });
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{T["1"]}</th>
            <th scope="col">{T["2"]}</th>
            <th scope="col">{T["3"]}</th>
            <th scope="col">{T["4"]}</th>
            <th scope="col">{T["5"]}</th>
            <th scope="col">{T["6"]}</th>
          </tr>
        </thead>
        <tbody>
          {Users.length > 0 ? (
            Users.map((user) => {
              const { id, name, birthDate, skills } = user;
              let pointerEvent = {
                pointerEvents: getSkills(skills)[1] ? "none" : "all",
              };
              return (
                <tr key={id}>
                  <td scope="row">{id}</td>
                  <td>{name}</td>
                  <td>{birthDate}</td>
                  <td>{getAge(birthDate)}</td>
                  <td>
                    {getSkills(skills)[1] ? (
                      <>
                        <button
                          type="button"
                          className="bg-transparent "
                          style={{ border: "none" }}
                          data-toggle="tooltip"
                          data-placement="top"
                          title={skills.replace(/,/g, " || ")}
                        >
                          {getSkills(skills)[0]}
                        </button>
                      </>
                    ) : (
                      <>{getSkills(skills)[0]}</>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger mx-3"
                      onClick={() => deleteUser(id)}
                    >
                      {T["7"]}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mx-3"
                      onClick={() => navigate(`/UpdateUser/${id}`)}
                    >
                      {T["8"]}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate(`/Users/${id}`)}
                    >
                      {T["9"]}
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>{T["10"]}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex-center m-auto col-sm-12">
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={() => navigate("/add")}
        >
          {T["11"]}
        </button>
      </div>
    </>
  );
};

export default UsersList;
