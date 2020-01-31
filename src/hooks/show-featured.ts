import { useState, useEffect } from "react";
import { useData } from "./data";

import { Show } from "../models/show";

export function useShow(): Show {
  const data = useData();
  const [show, setShow] = useState();

  useEffect(() => {
    if (data.length) {
      setShow(data[Math.round(Math.random() * data.length)]);
    }
  }, [data]);

  return show;
}
