import React from "react";
import { useShow } from "../hooks/show-featured";
import { IonContent, IonPage, IonLoading } from "@ionic/react";

import HomeFeaturedShow from "../components/HomeFeaturedShow";
import HomeShowsByGenres from "../components/HomeShowsByGenres";

const Home: React.FC = () => {
  const show = useShow();

  return (
    <IonPage>
      <IonContent color="dark">
        <IonLoading isOpen={!show} message="Loading..." />
        {show && <HomeFeaturedShow {...show} />}
        <HomeShowsByGenres />
      </IonContent>
    </IonPage>
  );
};

export default Home;
