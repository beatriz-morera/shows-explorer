import React from "react";
import { useFeatureShow, FeatureShowContext } from "../hooks/show-featured";

const FeatureShowProvider: React.FC = ({ children }) => {
  const data = useFeatureShow();
  return (
    <FeatureShowContext.Provider value={data}>
      {children}
    </FeatureShowContext.Provider>
  );
};

export default FeatureShowProvider;
