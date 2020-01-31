import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon
} from "@ionic/react";

import { play, informationCircleOutline, star } from "ionicons/icons";
import { Show } from "../models/show";

const HomeFeaturedShow: React.FC<Show> = ({
  name,
  image,
  genres,
  officialSite,
  url
}) => {
  const { original } = image;
  return (
    <IonCard className="welcome-card" color="dark">
      <img src={original} alt={name} />
      <IonCardTitle>{name}</IonCardTitle>
      <IonCardSubtitle>{genres.join(" - ")}</IonCardSubtitle>
      <div className="featured-show-buttons-container">
        <IonButton fill="outline" color="light">
          <a href={url} className="links">
            <IonIcon icon={informationCircleOutline} />
          </a>
        </IonButton>
        <IonButton color="light">
          <a href={officialSite} className="links">
            <IonIcon icon={play} /> Play
          </a>
        </IonButton>
        <IonButton fill="outline" color="light">
          <IonIcon icon={star} />
        </IonButton>
      </div>
    </IonCard>
  );
};

export default HomeFeaturedShow;
