import React from "react";
import { Link } from "react-router-dom";

import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { play, informationCircleOutline, add, checkmark } from "ionicons/icons";

import { Show } from "../models/show";
import { useFavorites } from "../hooks/localStorage";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface HeroShowProps {
  show: Show;
  children?: React.ReactNode;
  navigateOnClick?: boolean;
  showInfoButton?: boolean;
}

const HeroShow: React.FC<HeroShowProps> = ({
  show,
  children,
  navigateOnClick = true,
  showInfoButton = true,
}) => {
  const {
    name,
    image: { original },
    genres,
    officialSite,
    id,
  } = show;

  const [favorites, addFavorite, removeFavorite] = useFavorites();
  const isFavorite = favorites.some((f) => f.id === id);

  return (
    <IonCard className="welcome-card" color="dark" style={{ margin: "-2px" }}>
      {navigateOnClick ? (
        <Link to={`/search/details/${id}`} style={{ textDecoration: "none" }}>
          <LazyLoadImage alt={name} effect="blur" src={original} />
          <IonCardTitle style={{ margin: "10px 2px 5px" }}>{name}</IonCardTitle>
        </Link>
      ) : (
        <>
          <img src={original} alt={name} />
          <IonCardTitle style={{ margin: "3px 2px 0" }}>{name}</IonCardTitle>
        </>
      )}
      {children}
      <IonCardSubtitle>{genres.join(" - ")}</IonCardSubtitle>

      <div className="featured-show-buttons-container">
        <div className="icon-container">
          <IonIcon
            icon={isFavorite ? checkmark : add}
            size="large"
            style={{ marginBottom: "3px" }}
            onClick={() =>
              isFavorite ? removeFavorite(show) : addFavorite(show)
            }
          />
          <label>My List</label>
        </div>
        <IonButton color="light">
          <a href={officialSite} className="play-button-link">
            <IonIcon icon={play} /> Play
          </a>
        </IonButton>
        {showInfoButton ? (
          <Link to={`/search/details/${id}`} style={{ textDecoration: "none" }}>
            <div className="icon-container">
              <IonIcon
                icon={informationCircleOutline}
                size="large"
                style={{ marginBottom: "3px" }}
              />

              <label>Info</label>
            </div>
          </Link>
        ) : (
          <div style={{ width: "40px" }} />
        )}
      </div>
    </IonCard>
  );
};

export default HeroShow;
