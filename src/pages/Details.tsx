import React from "react";

import {
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonPage,
  IonLoading,
  IonContent
} from "@ionic/react";
import { RouteComponentProps } from "react-router";

import { useShow } from "../hooks/data";
import HeroShow from "../components/HeroShow";

interface DetailsProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Details: React.FC<DetailsProps> = ({ match }) => {
  const show = useShow(parseInt(match.params.id));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/search" text="" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark">
        <IonLoading isOpen={!show} message="Loading..." />
        {show ? (
          <HeroShow show={show} navigateOnClick={false} showInfoButton={false}>
            <section>
              <div
                className="details-info-summary"
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </section>
            <p className="details-info-year">
              ------- {show.premiered.slice(0, 4)} -------
            </p>
          </HeroShow>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default Details;
