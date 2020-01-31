import React, { useMemo } from "react";
import { useOrderedData } from "../hooks/data";

const HomeShowsByGenres: React.FC = () => {
  const { map, keys } = useOrderedData();

  const genres = useMemo(
    () =>
      keys.filter(k => {
        const size = map.get(k)?.length ?? 0;
        return size === 3 || size >= 6;
      }),
    [keys, map]
  );

  return (
    <div className="all-genres-container">
      {genres.map(genre => (
        <div key={genre}>
          <h4 className="genre-title">{genre}</h4>
          <div className="genre-container-container">
            <ul className="genre-container">
              {map
                .get(genre)
                ?.slice(0, 6)
                .map(show => (
                  <li key={show.id} className="">
                    <div className="image-container">
                      <img
                        className="image"
                        src={show.image.medium}
                        alt={show.name}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeShowsByGenres;
