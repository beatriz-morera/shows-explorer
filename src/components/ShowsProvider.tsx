import React from "react";
import { useData, DataContext } from "../hooks/data";

const ShowsProvider = ({ children }) => {
  const data = useData();
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default ShowsProvider;
