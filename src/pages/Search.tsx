import React, { useState, useCallback } from "react";
import { useFilteredShows } from "../hooks/data";
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonIcon
} from "@ionic/react";

import { Link } from "react-router-dom";

import { play } from "ionicons/icons";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const filteredShows = useFilteredShows(text);

  const filterShowsHandler = useCallback(ev => setText(ev.target.value), []);

  return (
    <IonPage>
      <IonToolbar color="dark">
        <IonSearchbar
          color="medium"
          autocomplete="on"
          placeholder="Search for a show..."
          value={text}
          onInput={filterShowsHandler}
        ></IonSearchbar>
      </IonToolbar>
      <IonContent color="dark">
        <section className="all-shows-container">
          <IonList color="dark">
            {filteredShows.slice(0, 100).map(show => (
              <Link
                to={`/search/details/${show.id}`}
                key={show.id}
                style={{ textDecoration: "none" }}
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
                  <div className="play-icon-list">
                    <IonIcon icon={play} />
                  </div>
                </div>
              </Link>
            ))}
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Search;
