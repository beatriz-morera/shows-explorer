import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import { Link } from "react-router-dom";

import { checkmarkCircle } from "ionicons/icons";

import { RouteComponentProps } from "react-router";

import { useFavorites } from "../hooks/localStorage";

interface MyListProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const MyList: React.FC<MyListProps> = ({ match }) => {
  const [favorites] = useFavorites();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle style={{ textAlign: "center" }}>My List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark">
        {favorites.length ? (
          <div className="myList-gallery-container">
            {favorites.map(fav => (
              <Link to={`/search/details/${fav.id}`} key={fav.id}>
                <img
                  src={fav.image.medium}
                  alt={fav.name}
                  className="myList-image"
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-myList-container">
            <IonIcon
              icon={checkmarkCircle}
              color="medium"
              style={{ fontSize: "250px" }}
            ></IonIcon>
            <h4 className="empty-myList-info">
              Add shows to your list so you can easily find them later.
            </h4>
            <Link to="/search">
              <IonButton
                color="light"
                style={{ marginTop: "40px", fontWeight: "600" }}
              >
                FIND SOMETHING TO WATCH
              </IonButton>
            </Link>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MyList;
