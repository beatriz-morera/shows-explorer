import React from "react";
import { useRandomShow } from "../hooks/show-featured";
import { IonContent, IonPage, IonLoading } from "@ionic/react";

import HeroShow from "../components/HeroShow";
import GenresList from "../components/GenresList";

const Home: React.FC = () => {
  const show = useRandomShow();

  return (
    <IonPage>
      <IonContent color="dark">
        <IonLoading isOpen={!show} message="Loading..." />
        {show && <HeroShow {...show} />}
        <GenresList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
