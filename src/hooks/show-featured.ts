import { useState, useEffect } from "react";
import { useContextData } from "./data";

import { Show } from "../models/show";

export function useRandomShow(): Show {
  const data = useContextData();
  const [show, setShow] = useState();

  useEffect(() => {
    if (data.length) {
      setShow(data[Math.round(Math.random() * data.length)]);
    }
  }, [data]);

  return show;
}
