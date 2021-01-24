import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotfound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={ManageCoursePage} />      
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
