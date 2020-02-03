import React from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font
import WebFont from "webfontloader";

// my components
import MyHeader from "./components/header";
import MyContent from "./components/content";

import { BrowserRouter as Router, Route } from "react-router-dom";

// my pages
import Err from "./pages/err";
import Explore from "./pages/explore";
import Home from "./pages/home";
import ListContent from "./pages/listcontent";
import MyAcc from "./pages/myacc";
import MyLists from "./pages/mylist";
import SignUp from "./pages/signup";
import MyFriends from "./pages/myfriends";
import Login from "./pages/login";

WebFont.load({
  google: {
    families: ["Pacifico", "sans-serif"]
  }
});

function App() {
  return (
    <div
      style={{ height: "100vh", background: "whitesmoke" }}
      className="App flex flexcol"
    >
      <Router>
        <Route exact path="/" component={Home} />
        {/* my list */}
        <Route path="/mylist">
          <MyHeader width={"1080px"} />
          <MyLists />
        </Route>
        {/* My List Contents */}
        <Route path="/mylistContents/:listID">
          <MyHeader width={"100%"} />
          <ListContent />
        </Route>
        {/* Explore */}
        <Route path="/explore">
          <MyHeader width={"1080px"} />
          <Explore />
        </Route>
        {/* My Account */}
        <Route path="/myAccount">
          <MyHeader width={"1080px"} />
          <MyAcc />
        </Route>
        {/* My Friends */}
        <Route path="/MyFriends">
          <MyHeader width={"1080px"} />
          <MyFriends />
        </Route>
        {/* Error */}
        <Route path="/Error">
          <MyHeader width={"100%"} />
          <Err />
        </Route>
        {/* SignUp */}
        <Route path="/SignUp">
          <SignUp />
        </Route>
        {/* lgoin */}
        <Route path="/Login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
