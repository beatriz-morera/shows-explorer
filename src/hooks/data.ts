import { useState, useEffect, useMemo, useContext, createContext } from "react";
import { Show } from "../models/show";

export const DataContext = createContext([]);

export function useData(): Show[] {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(rs => rs.json())
      .then(data => setData(data));
  }, []);

  return data;
}

export const useContextData = () => useContext(DataContext);

export function useShow(id: number) {
  const data = useContextData();
  const [show, setShow] = useState<Show>();

  useEffect(() => {
    const item = data.find(s => s.id === id);
    setShow(item);
  }, [data, id]);

  return show;
}

export function useFilteredShows(text: string = "") {
  const allShows = useContextData();
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);

  useEffect(() => {
    setFilteredShows(
      allShows.filter(show =>
        show.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [allShows, text]);

  return filteredShows;
}

export function useOrderedData() {
  const shows = useContextData();
  return useMemo(() => {
    const map = new Map<string, Show[]>();
    const keys: string[] = [];
    shows.forEach(show =>
      show.genres.forEach(g => {
        let list = map.get(g);
        if (!list) {
          list = [];
          map.set(g, list);
          keys.push(g);
        }
        list.push(show);
      })
    );
    return { map, keys };
  }, [shows]);
}
