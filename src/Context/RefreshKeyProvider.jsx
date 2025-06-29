import { createContext, useState } from "react";

export const RefreshKeyContext = createContext();

const RefreshKeyProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <RefreshKeyContext.Provider value={{ refreshKey, setRefreshKey }}>
      {children}
    </RefreshKeyContext.Provider>
  );
};

export default RefreshKeyProvider;
