import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon
} from "@ionic/react";

import { play, informationCircleOutline, add } from "ionicons/icons";
import { Show } from "../models/show";

const HeroShow: React.FC<Show> = ({
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
        <div className="icon-container">
          <IonIcon icon={add} size="large" style={{ marginBottom: "3px" }} />
          <label>My List</label>
        </div>
        <IonButton color="light">
          <a href={officialSite} className="links">
            <IonIcon icon={play} /> Play
          </a>
        </IonButton>
        <div className="icon-container">
          <IonIcon
            icon={informationCircleOutline}
            size="large"
            style={{ marginBottom: "3px" }}
          />
          <a href={url} className="links">
            Info
          </a>
        </div>
      </div>
    </IonCard>
  );
};

export default HeroShow;
