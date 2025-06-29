import React from "react";

const BestSellers = () => {  
  return (
    <div className="flex flex-col gap-2 flex-grow md:pl-5 max-w md:pt-10 relative text-xs">
      <span className="absolute left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-zinc-500 dark:via-zinc-100 to-transparent opacity-50 rounded-full hidden md:block"></span>

      <div className="text-[10px] text-zinc-400 dark:text-zinc-200 whitespace-nowrap">
        BEST SELLERS
      </div>

      <div className="flex md:flex-col gap-3 md:gap-2">
        <div className="md:flex  items-center gap-2 text-white">
          <div className="bg-black h-8 w-8 rounded-lg flex items-center justify-center mb-1 md:mb-3">
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <g fillRule="evenodd">
                <path
                  d="M11.62,4.76c-0.02,-2.02 1.65,-3 1.73,-3.04c-0.94,-1.38 -2.4,-1.57 -2.93,-1.59c-1.25,-0.13 -2.43,0.73 -3.06,0.73c-0.63,0 -1.61,-0.71 -2.64,-0.69c-1.36,0.02 -2.61,0.79 -3.31,2.00c-1.41,2.45 -0.36,6.08 1.01,8.06c0.67,0.97 1.47,2.06 2.53,2.02c1.01,-0.04 1.4,-0.65 2.62,-0.65c1.22,0 1.57,0.65 2.64,0.63c1.09,-0.02 1.78,-0.99 2.45,-1.96c0.77,-1.13 1.09,-2.22 1.11,-2.28c-0.02,-0.01 -2.13,-0.82 -2.15,-3.24Z"
                  transform="translate(.745 3.743)"
                />
                <path
                  d="M2.5,2.56c0.56,-0.68 0.93,-1.62 0.83,-2.56c-0.8,0.03 -1.78,0.54 -2.36,1.21c-0.52,0.6 -0.97,1.56 -0.85,2.47c0.9,0.07 1.81,-0.46 2.37,-1.13Z"
                  transform="translate(7.857)"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-col text-center">
            <span>Apple</span>
            <span className="border border-gray-300 rounded-md text-[10px] font-medium px-1 w-fit hidden md:inline">
              98%
            </span>
          </div>
        </div>

        <div className="md:flex items-center gap-2 text-white mb-3">
          <div className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center mb-1">
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M.455 16.209c-.862.637-.546 1.748 1.346 2.281 2.188.72 4.262.804 6.413.416v-2.032L6.28 17.579c-.712.258-1.763.312-2.341.121-.579-.191-.471-.553.242-.807l4.033-1.44v-2.268l-5.604 1.99C2.609 15.173 1.251 15.618.455 16.209zM14.358 4.223c-1.299-.437-3.721-1.165-5.383-1.473v17.26l3.908 1.24V6.77c0-.678.305-1.132.792-.974.637.179.763.804.763 1.482v5.785c2.437 1.174 4.354-.004 4.354-3.105C18.792 6.774 17.671 5.359 14.358 4.223z" />
              <path d="M22.205 14.878c-1.637-.621-3.721-.833-5.425-.645-1.191.133-2.188.375-3.154.7v2.348l4.188-1.478c.712-.258 1.762-.312 2.341-.121.583.191.471.553-.242.807l-6.287 2.239v2.26l8.546-3.063c0 0 1.146-.42 1.617-1.011h-.001c.211-.862.003-1.724-1.943-2.237z" />
            </svg>
          </div>
          <div className="flex flex-col text-center">
            <span>Sony</span>
            <span className="border border-gray-300 rounded-md text-[10px] font-medium px-1 w-fit hidden md:inline">
              96%
            </span>
          </div>
        </div>

        <div className="md:flex items-center gap-2 text-white">
          <div className="bg-[#f57921] h-8 w-8 rounded-lg flex items-center justify-center mb-1">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="white">
                <path d="M6.5 3H0v11h2V5h4.5C7.327 5 8 5.673 8 6.5V14h2V6.5C10 4.57 8.43 3 6.5 3z" />
                <path d="M4 7h2v7H4zM12 3h2v11h-2z" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col text-center">
            <span>Xiaomi</span>
            <span className="border border-gray-300 rounded-md text-[10px] font-medium px-1 w-fit hidden md:inline">
              91%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BestSellers);
