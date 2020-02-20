import { useState, useEffect, useContext, createContext } from "react";
import { useContextData } from "./data";

import { Show } from "../models/show";

export const FeatureShowContext = createContext<Show | undefined>(undefined);

export function useFeatureShow(): Show {
  const data = useContextData();
  const [show, setShow] = useState();

  useEffect(() => {
    if (data.length) {
      setShow(data[Math.round(Math.random() * data.length)]);
    }
  }, [data]);

  return show;
}

export const useContextFeatureShow = () => useContext(FeatureShowContext);
