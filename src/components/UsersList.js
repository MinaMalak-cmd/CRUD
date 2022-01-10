import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { Link,Navigate, useNavigate } from "react-router-dom";
import getAge from "../helpers/getAge";

const UsersList = () => {
    const [Users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const navigate = useNavigate();

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
    const deleteUser = (id) => {
        UserDataService.delete(id)
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    };
    const setActiveUser = (User, index) => {
      setCurrentUser(User);
      setCurrentIndex(index);
    };
    const getById = (id) => {
        
      };
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birth date</th>
                        <th scope="col">Age</th>
                        <th scope="col">Skills</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { Users.length > 0 ? (
                        Users.map(user => {
                            const {id, name, birthDate, skills} = user;
                            return (
                                <tr key={id}>
                                    <td scope="row">{id}</td>
                                    <td>{name}</td>
                                    <td>{birthDate}</td>
                                    <td>{getAge(birthDate)}</td>
                                    <td>{skills}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger mx-3" onClick={()=>deleteUser(id)}>Delete</button>
                                        <button type="button" className="btn btn-secondary mx-3">Edit</button>
                                        <button type="button" className="btn btn-primary" onClick={()=> navigate(`/Users/${id}`)}>View Details</button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )   
                    }
                </tbody>
            </table>
            <div className="flex-center m-auto col-sm-12">
              <button type="button" className="btn btn-primary my-3" onClick={()=> navigate('/add')}>Add new user</button>  
            </div>
        </>
    );
  };
  
  export default UsersList;