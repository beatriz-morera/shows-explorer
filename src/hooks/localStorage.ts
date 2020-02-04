import { useState, useCallback, Dispatch } from "react";
import { Show } from "../models/show";

const FAVORITES_KEY = "favorites";

function setLocalFavorites(favorites: Show[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function getLocalFavorites(): Show[] {
  const json = localStorage.getItem(FAVORITES_KEY);
  if (json) {
    return JSON.parse(json);
  }
  return [];
}

export function useFavorites(): [Show[], Dispatch<Show>, Dispatch<Show>] {
  const [favorites, setFavorites] = useState(getLocalFavorites());

  const addFavorite = useCallback(
    (show: Show) =>
      setFavorites((items: Show[]) => {
        const newValues = [...items, show];
        setLocalFavorites(newValues);
        return newValues;
      }),
    [setFavorites]
  );

  const removeFavorite = useCallback(
    ({ id }: Show) =>
      setFavorites((items: Show[]) => {
        const newValues = items.filter((item: Show) => item.id !== id);
        setLocalFavorites(newValues);
        return newValues;
      }),
    [setFavorites]
  );

  return [favorites, addFavorite, removeFavorite];
}
