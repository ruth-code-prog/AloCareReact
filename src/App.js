import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

import Provider from "helpers/hooks/useGlobalContext";
function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
