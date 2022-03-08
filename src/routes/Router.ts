import React from 'react';
import { Route, Routes} from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import User from "../components/Users/UpdateUserProfile/User";
import UsersList from "../components/Users/UsersList/UsersList";
import UserDetail from "../components/Users/UserDetail/UserDetail";
const Router = () => (
    <Routes>
        <Route exact path="/" element={<UsersList />} />
        <Route exact path="/Users" element={<UsersList />} />
        <Route path="/add" element={<AddUser />} />  
        <Route path="/UpdateUser/:id" element={<User />} />
        <Route path="/Users/:id" element={<UserDetail />} />       
    </Routes>
);

export default Router;