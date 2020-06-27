import Menu from "./components/Menu";
import Page from "./pages/Page";
import Login from "./components/Login";
import Statistic from "./components/Statistic";
import Welcome from "./components/Welcome";
import AddFood from "./components/AddFood";
import React, { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [connected, setConnected] = useState<Boolean>(false);
  //console.log(localStorage);
  //localStorage.setItem("connected", "false");
  return (
    <IonApp>
      <IonReactRouter>
        {localStorage.getItem("connected") == "true" ? (
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/page/:name" component={Page} exact />
              <Redirect from="/" to="/page/Accueil" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        ) : (
          <Router>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login}></Route>
          </Router>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
