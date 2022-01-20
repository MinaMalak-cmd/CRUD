import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Router from "./routes/Router";
import Arabic from "./TranslationFiles/ar.json";
import English from "./TranslationFiles/en.json";
import LanguageContext, {
  LanguageProvider,
} from "./contexts/LanguageContext/LanguageContext";

const App = () => {
  let lang =
    localStorage.getItem("language") == undefined
      ? "en"
      : localStorage.getItem("language");
  let keys = lang === "en" ? English : Arabic;
  const language = { current: lang, keys: keys };

  return (
    <div>
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
