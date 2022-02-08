import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AllRobots from "./robots/Allrobots";
import ContactDetails from "./robots/ContactDetails";
import {NotFound} from "./robots/NotFound";
function routes(){
  return (
    <React.Fragment>
      <Router>
        <Routes>
            <Route exact path="/" element={<ContactDetails/>} />
            <Route path="/robots" element={<AllRobots/>} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default routes;
