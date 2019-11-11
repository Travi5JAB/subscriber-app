import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

////pages
import MailList from "./MailList";

function Routes({ }) {
  return (
    <Router>
      <Route
        exact path="/mail_list"
        render={props => (
          <MailList
            {...props}
          />
        )}
      />
    </Router>
  );
}

export default Routes;
