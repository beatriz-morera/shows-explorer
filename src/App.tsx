import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
import { search, checkmark, home } from "ionicons/icons";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import Details from "./pages/Details";

import ShowsProvider from "./components/ShowsProvider";
import FeatureShowProvider from "./components/FeatureShowProvider";

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
import "./theme/style.css";

const App: React.FC = () => {
  return (
    <ShowsProvider>
      <FeatureShowProvider>
        <IonApp>
          <IonReactHashRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/search" component={Search} exact={true} />
                <Route path="/search/details/:id" component={Details} />
                <Route path="/myList" component={MyList} />
                <Route
                  path="/"
                  render={() => <Redirect to="/home" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/search">
                  <IonIcon icon={search} />
                  <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="myList" href="/myList">
                  <IonIcon icon={checkmark} />
                  <IonLabel>MyList</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactHashRouter>
        </IonApp>
      </FeatureShowProvider>
    </ShowsProvider>
  );
};

export default App;
