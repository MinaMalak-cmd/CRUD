import React from 'react';
import { Route, Routes} from "react-router-dom";
// import { AddUser,  User, UsersList, UserDetail } from '../components';
import AddUser from "../components/AddUser";
import User from "../components/User";
import UsersList from "../components/UsersList";
import UserDetail from "../components/UserDetail";
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