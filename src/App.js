import React from "react";
import NavBar from "./components/NavBar";
import Router from "./routes/Router";

const App = () =>{
  return (
    <div>
     <NavBar />
    <div className="container mt-3">
        <Router />
    </div>
  </div>
  );
}

export default App;
