import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon
} from '@ionic/react';

import { play, informationCircleOutline, star } from 'ionicons/icons';

interface HomeShowProps {
  name: string;
  image: string;
  genres: string[];
}

const HomeShow: React.FC<HomeShowProps> = ({ name, image, genres }) => {
  return (
    <IonCard className="welcome-card" color="dark">
      <img src={image} alt={name} />
      <IonCardHeader></IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
      <IonCardSubtitle>{genres.join(' - ')}</IonCardSubtitle>
      <IonButton fill="outline" color="light">
        <IonIcon icon={informationCircleOutline} />
      </IonButton>
      <IonButton color="light">
        <IonIcon icon={play} />
        Play
      </IonButton>
      <IonButton fill="outline" color="light">
        <IonIcon icon={star} />
      </IonButton>
    </IonCard>
  );
};

export default HomeShow;
