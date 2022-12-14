import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/posts" component={PostsPage} />
    </Router>
  );
};

export default App;
