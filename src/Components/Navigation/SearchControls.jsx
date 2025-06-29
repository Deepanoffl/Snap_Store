import SearchedProducts from "./SearchedProducts";
import { SearchContext } from "../../Context/SearchProvider";
import { useContext } from "react";

const SearchControls = () => {
  const { quickSearch } = useContext(SearchContext);
  return (
    <div
      className="fixed inset-0 z-60 w-full top-16 bg-black/50 backdrop-blur-sm overflow-y-auto searchScrollBar sm:pr-20 md:pl-0 sm:pl-20 max-[375px]:p-0"
      style={{ opacity: 1 }}
    >
      <div
        className={`md:w-1/2 w-full sm:mx-auto  backdrop-blur-lg ${
          quickSearch.length === 0 ? "h-80 flex items-center" : "min-h-screen pb-14"
        }`}
      >
        {quickSearch.length > 0 ? (
          quickSearch.map((product, index) => (
            <SearchedProducts
              productDetails={product}
              index={index}
              key={product.id}
            />
          ))
        ) : (
          <div className="w-1/2 h-full mx-auto flex justify-center items-center  backdrop-blur-lg  text-white text-sm font-bold">
            <span className="flex flex-col justify-center items-center gap-2 animate-fade-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-16 w-16"
              >
                <path
                  fill="#ebebed"
                  d="M18.6188 4.85133C14.817 1.04956 8.65311 1.04956 4.85133 4.85133C1.04956 8.65311 1.04956 14.817 4.85133 18.6188C8.41438 22.1818 14.0522 22.4056 17.8758 19.29L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L19.29 17.8758C22.4056 14.0522 22.1818 8.41438 18.6188 4.85133Z"
                />
                <path
                  fill="#fa1228"
                  d="M9.73222 15.182C9.3417 15.5725 8.70853 15.5725 8.31801 15.182C7.92748 14.7915 7.92748 14.1583 8.31801 13.7678L10.0858 12L8.31803 10.2322C7.92751 9.84171 7.92751 9.20855 8.31803 8.81802C8.70856 8.4275 9.34172 8.4275 9.73225 8.81802L11.5 10.5858L13.2678 8.81802C13.6583 8.42749 14.2914 8.42749 14.682 8.81802C15.0725 9.20854 15.0725 9.84171 14.682 10.2322L12.9142 12L14.682 13.7678C15.0725 14.1583 15.0725 14.7915 14.682 15.182C14.2915 15.5725 13.6583 15.5725 13.2678 15.182L11.5 13.4142L9.73222 15.182Z"
                />
              </svg>
              No Item Found !
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchControls;
