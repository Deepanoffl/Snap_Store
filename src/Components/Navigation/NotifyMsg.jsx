const NotifyMsg = ({
  toggleNotify,
  setToggleNotify,
  clearNotification,
  setClearNotification,
}) => {
  const dismissnotify = () => {
    setToggleNotify(false);
    setClearNotification(true);
  };
  return (
    <div
      className={`absolute -left-24 top-[122%] backdrop-blur-md bg-black/5 dark:bg-black/40 shadow-md w-[250%] rounded-b-sm selection:bg-none transition-all duration-300 `}
    >
      <ul
        className={`transition-all duration-300 ease-in-out overflow-hidden transform origin-top ${
          toggleNotify
            ? "max-h-55 opacity-100 scale-y-100 py-2"
            : "max-h-0 opacity-0 scale-y-0 py-0"
        }`}
      >
        {clearNotification ? (
          <>
            <li
              className="text-sm pb-5 text-center font-medium"
              style={{ opacity: 1, transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="md:h-28 md:w-28 h-20 w-15 mx-auto"
              >
                <g
                  data-name="no notification"
                  fill="#000000"
                  className="color000 svgShape"
                >
                  <path
                    fill="none"
                    d="M416 512H96a96 96 0 0 1-96-96V96A96 96 0 0 1 96 0h320a96 96 0 0 1 96 96v320a96 96 0 0 1-96 96Zm0 0"
                    data-name="Path 28"
                  ></path>
                  <path
                    fill="#ffd200"
                    d="M256 384a40.052 40.052 0 0 0 39.184-32H216.8a40.082 40.082 0 0 0 39.2 32Zm0 0"
                    data-name="Path 29"
                    className="colorffd200 svgShape"
                  ></path>
                  <path
                    fill="#ffd200"
                    d="M356.031 308.4a71.451 71.451 0 0 1-25.375-54.672V224a74.721 74.721 0 0 0-64-73.809v-11.52a10.664 10.664 0 1 0-21.328 0v11.52a74.708 74.708 0 0 0-64 73.809v29.742a71.552 71.552 0 0 1-25.473 54.758A18.667 18.667 0 0 0 168 341.343h176a18.668 18.668 0 0 0 12.031-32.943Zm0 0"
                    data-name="Path 30"
                    className="colorffd200 svgShape"
                  ></path>
                  <path
                    fill="#ffe466"
                    d="M373.328 384a10.6 10.6 0 0 1-7.535-3.121L131.121 146.207a10.667 10.667 0 0 1 15.086-15.086l234.672 234.672A10.664 10.664 0 0 1 373.328 384Zm0 0"
                    data-name="Path 31"
                    className="colorffe466 svgShape"
                  ></path>
                </g>
              </svg>
              <p className="-mt-5">empty</p>
            </li>
          </>
        ) : (
          <>
            <li className="px-5 pt-3">
              <p className="text-sm leading-relaxed">
                Welcome to my shop. <br />
                Add Your Favorites.
              </p>
            </li>
            <li className="px-5 pt-3">
              <p className="text-sm leading-[1.1rem]">Happy shopping 😊!</p>
              <div className="text-right py-2 w-full mb-2">
                <button
                  className="text-xs font-medium bg-slate-800 dark:bg-red-500 py-[6px] px-2 mr-5 rounded-sm text-white cursor-pointer"
                  onClick={dismissnotify}
                >
                  Dismiss
                </button>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NotifyMsg;
