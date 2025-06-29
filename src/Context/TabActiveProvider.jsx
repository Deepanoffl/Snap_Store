import { createContext, useState } from "react";

export const TabContext = createContext();
const TabActiveProvider = ({ children }) => {
  const [tabActive, setTabActive] = useState("All");
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <TabContext.Provider
      value={{ tabActive, setTabActive, activeCategory, setActiveCategory }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabActiveProvider;
