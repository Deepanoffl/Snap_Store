import SideBar from "./SideBar";
import SearchBox from "./SearchBox";
import Notify from "./Notify";
import CartBtn from "./CartBtn";
import ProductQuickView from "../ProductGallery/ProductQuickView";
import { ModalContext } from "../../Context/ProductModalProvider";
import { useContext } from "react";

const Navbar = () => {
  const { productModal } = useContext(ModalContext);
  return (
    <>
      <header className="bg-white dark:bg-gray-900 dark:text-white fixed top-0  z-40 w-full h-16 flex items-center shadow-md">
        <div className="flex justify-between w-[min(100%-6rem,1380px)] mx-auto h-[70%]">
          <div className="flex items-end gap-1 text-sm mb-2">
            <SideBar />
            {/* Logo */}
            <span className="w-8 h-8 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.36 48.82">
                <g fill="#000000">
                  <path
                    fill="#ff491f"
                    d="M37.17 48.82H0L3.77 12.5H33.4l.6 6.06Z"
                  />
                  <path
                    fill="#ed3618"
                    d="M19.09 24.24h20.59l2.62 24.58H16.47Z"
                  />
                  <path
                    fill="#ffe14d"
                    d="M21.15 24.24h20.59l2.62 24.58H18.53Z"
                  />
                  <path
                    fill="currentColor"
                    d="M26.58 16.79a.74.74 0 0 1-.74-.74V8.73a7.26 7.26 0 1 0-14.51 0v7.33a.74.74 0 1 1-1.47 0V8.73a8.73 8.73 0 0 1 17.46 0v7.33a.74.74 0 0 1-.74.73zM31.45 39a5.51 5.51 0 0 1-5.51-5.51v-4.76a.74.74 0 1 1 1.47 0v4.77a4 4 0 0 0 8.07 0v-4.77a.74.74 0 0 1 1.47 0v4.77a5.51 5.51 0 0 1-5.5 5.5z"
                    className="dark:text-white text-slate-700"
                  />
                </g>
              </svg>
            </span>
          </div>

          <SearchBox />

          <div className="flex items-center gap-4 sm:gap-10 relative">
            <Notify />
            <CartBtn />
          </div>
        </div>
      </header>
      {productModal && <ProductQuickView />}
    </>
  );
};

export default Navbar;
