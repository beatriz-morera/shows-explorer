import React, { useState, useCallback } from "react";
import { useFilteredShows } from "../hooks/data";
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonCard,
  IonList,
  IonItem
} from "@ionic/react";

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
        <section className="search-container">
          <IonCard>
            <h4 className="search-title">Get your popcorn ready...</h4>
          </IonCard>
          <IonList color="dark">
            {filteredShows.slice(0, 100).map(show => (
              <IonItem
                key={show.id}
                color="dark"
                routerLink={`/search/details/${show.id}`}
              >
                <IonCard>
                  <div className="popular-search-container">
                    <div className="image-container">
                      <img src={show.image.medium} alt={show.name} />
                    </div>
                    <div className="popular-search-info-container">
                      <h4 className="show-title">{show.name}</h4>
                      <p>{show.premiered.slice(0, 4)}</p>
                      <p className="show-info">{show.genres.join(" - ")}</p>
                      <p className="show-info">Language: {show.language}</p>
                    </div>
                  </div>
                </IonCard>
              </IonItem>
            ))}
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Search;
