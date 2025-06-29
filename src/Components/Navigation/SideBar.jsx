import React from "react";
import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
const SideBar = () => {
  const { setCategoryModal } = useContext(CategoryContext);
  
  const toggleSidebar = () => {
    setCategoryModal((prev) => !prev);
  };
  return (
    <div
      className="min-[578px]:hidden fixed top-5 left-2 z-50 cursor-pointer"
      onClick={toggleSidebar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        ></path>
      </svg>
    </div>
  );
};

export default React.memo(SideBar);
