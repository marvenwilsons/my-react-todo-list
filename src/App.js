import React from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import WebFont from "webfontloader";

// my components
import MyHeader from "./components/header";
import MyContent from "./components/content";

WebFont.load({
  google: {
    families: ["Pacifico", "sans-serif"]
  }
});

function App() {
  return (
    <div style={{ height: "100vh" }} className="App flex flexcol">
      <MyHeader />
      <MyContent />
    </div>
  );
}

export default App;
