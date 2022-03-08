import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Router from "./routes/Router";
import Arabic from "./TranslationFiles/ar.json";
import English from "./TranslationFiles/en.json";
import "./App.css";
import {ILang} from "./interfaces/ILang";

import LanguageContext, {
  LanguageProvider,
} from "./contexts/LanguageContext/LanguageContext";

const App = () => {
  let lang =
    localStorage.getItem("language") == undefined
      ? "en"
      : localStorage.getItem("language");
  let keys = lang === "en" ? English : Arabic;
  const language:ILang = { current: (lang!=null?lang:''), keys: keys };

  return (
    <div className={`${language.current!=undefined?language.current:''}`}>
      <LanguageProvider value={language}>
        <NavBar />
        <div className="container mt-3">
          <Router />
        </div>
      </LanguageProvider>
    </div>
  );
};

export default App;
