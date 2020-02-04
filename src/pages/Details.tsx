import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonLoading,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon
} from "@ionic/react";

import { play, informationCircleOutline, add } from "ionicons/icons";
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
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/search" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark">
        <IonLoading isOpen={!show} message="Loading..." />
        {show ? (
          <IonCard color="medium">
            <IonCardHeader>
              <img src={show.image.original} alt={show.name} />
            </IonCardHeader>

            <IonCardTitle>{show.name}</IonCardTitle>
            <IonCardSubtitle>{show.premiered.slice(0, 4)}</IonCardSubtitle>
            <div className="details-info-container">
              <p className="show-info">{show.genres.join(" - ")}</p>
              <p className="show-info">Language: {show.language}</p>
            </div>
            <IonCardContent>
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </IonCardContent>
            <div className="featured-show-buttons-container">
              <div className="icon-container">
                <IonIcon
                  icon={add}
                  size="large"
                  style={{ marginBottom: "3px" }}
                />
                <label>My List</label>
              </div>
              <IonButton color="light">
                <a href={show.officialSite} className="links">
                  <IonIcon icon={play} /> Play
                </a>
              </IonButton>
              <div className="icon-container">
                <IonIcon
                  icon={informationCircleOutline}
                  size="large"
                  style={{ marginBottom: "3px" }}
                />
                <a href={show.url} className="links">
                  Info
                </a>
              </div>
            </div>
          </IonCard>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default Details;
