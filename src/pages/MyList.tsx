import React from "react";
import { IonContent, IonPage, IonButton, IonIcon } from "@ionic/react";

import { Link } from "react-router-dom";

import { checkmarkCircle } from "ionicons/icons";

const MyList: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark">
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
      </IonContent>
    </IonPage>
  );
};

export default MyList;
