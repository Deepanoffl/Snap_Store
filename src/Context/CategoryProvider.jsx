import { createContext, useState } from "react";

export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <CategoryContext.Provider
      value={{
        categoryModal,
        setCategoryModal,
        categoryLoading,
        setCategoryLoading,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
