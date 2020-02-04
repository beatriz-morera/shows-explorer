import React, { useState, useCallback } from "react";
import { useFilteredShows } from "../hooks/data";
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
  IonIcon
} from "@ionic/react";

import { play } from "ionicons/icons";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const filteredShows = useFilteredShows(text);

  const filterShowsHandler = useCallback(ev => setText(ev.target.value), []);

  return (
    <IonPage>
      <IonContent color="dark">
        <IonSearchbar
          color="medium"
          autocomplete="on"
          placeholder="Search for a show..."
          value={text}
          onInput={filterShowsHandler}
        ></IonSearchbar>
        <section className="all-shows-container">
          <IonList color="dark">
            {filteredShows.slice(0, 100).map(show => (
              <IonItem
                key={show.id}
                color="dark"
                routerLink={`/search/details/${show.id}`}
              >
                <div className="show-container">
                  <div className="show-image-container">
                    <img src={show.image.medium} alt={show.name} />
                  </div>
                  <div className="show-info-container">
                    <h4 className="show-title">{show.name}</h4>
                    <p className="show-year">{show.premiered.slice(0, 4)}</p>
                    <p className="show-info">{show.genres.join(" - ")}</p>
                    <p className="show-info">Language: {show.language}</p>
                  </div>
                  <div className="favorite-icon-list">
                    <IonIcon icon={play} />
                  </div>
                </div>
              </IonItem>
            ))}
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Search;
