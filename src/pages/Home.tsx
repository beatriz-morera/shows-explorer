import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonLoading } from "@ionic/react";

import HomeShow from "../components/HomeShow";

const Home: React.FC = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(rs => rs.json())
      .then(data => {
        const selected = data[Math.round(Math.random() * data.length)];
        setShow({
          image: selected.image.original,
          name: selected.name,
          genres: selected.genres
        });
      });
  }, []);

  return (
    <IonPage>
      <IonContent color="dark">
        <IonLoading isOpen={!show} message="Loading..." />
        {show && <HomeShow {...show} />}
      </IonContent>
    </IonPage>
  );
};

export default Home;
