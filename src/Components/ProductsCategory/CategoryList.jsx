import CategoryItem from "./CategoryItem";
import { useContext, useState, useEffect } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import { TabContext } from "../../Context/TabActiveProvider";

const CategoryList = () => {
  const { categoryModal, setCategoryModal } = useContext(CategoryContext);
  const { activeCategory } = useContext(TabContext);  
  
  const [isMobileView, setIsMobileView] = useState(false);
  const Categories = [
    "Tv",
    "Audio",
    "Laptop",
    "Mobile",
    "Gaming",
    "Appliances",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 578;
      setIsMobileView(mobile);
      // Auto-close sidebar when resizing to larger screens
      if (!mobile && categoryModal) {
        setCategoryModal(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [categoryModal]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryModal && isMobileView) {
        const sidebar = document.querySelector(".sidebar-container");
        if (sidebar && !sidebar.contains(e.target)) {
          setCategoryModal(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoryModal, isMobileView]);

  return (
    <>
      {categoryModal && isMobileView && (
        <div
          className="fixed inset-0 top-16 bg-black/50 bg-opacity-50 z-10"
          onClick={() => setCategoryModal(false)}
        />
      )}
      <div
        className={`fixed top-16 z-20  ${
          categoryModal ? "left-0" : "-left-40"
        } transition-all duration-300 min-[578px]:left-0`}
      >
        <div
          className={`w-40 h-screen backdrop-blur-3xl bg-gradient-to-b from-[#1e3c72] via-[#2a5298] to-[#4f91c9] dark:bg-gradient-to-b dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]`}
        >
          <div className="">
            <h1 className="pt-5 font-bold text-center text-white">
              Categories
            </h1>
            <ul className="relative mt-2 text-white capitalize">
              {activeCategory && (
                <div
                  className="absolute right-0 w-1 h-10 bg-yellow-400 transition-all duration-300 rounded-r-md"
                  style={{
                    top: `${
                      Categories.findIndex((c) => c === activeCategory) * 48
                    }px`,
                  }}
                />
              )}
              {Categories.map((category) => (
                <CategoryItem category={category} key={category} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
