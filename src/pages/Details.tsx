import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonLoading,
  IonTitle,
  IonContent
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { useShow } from "../hooks/data";

interface DetailsProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Details: React.FC<DetailsProps> = ({ match }) => {
  const show = useShow(parseInt(match.params.id));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/search" />
          </IonButtons>
          <IonTitle>Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading isOpen={!show} message="Loading..." />
        {show && JSON.stringify(show)}
      </IonContent>
    </IonPage>
  );
};

export default Details;
