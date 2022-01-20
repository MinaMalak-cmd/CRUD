import React, { useContext } from "react";
import Language from "../../contexts/LanguageContext/LanguageContext";
const NavBar = () => {
  const Lang = useContext(Language);
  console.log(Lang.current);
  const onClickHandler =(e)=>{
    localStorage.setItem("language",
    (Lang.current==="ar")?"en":"ar")
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/Users" className="navbar-brand">
        Mina
      </a>
      <button 
      type="button"
      className="navbar-brand btn btn-default action-button bgtrans " 
      onClick={onClickHandler}>
        {Lang.keys["en"]}
      </button>
    </nav>
  );
};

export default NavBar;
