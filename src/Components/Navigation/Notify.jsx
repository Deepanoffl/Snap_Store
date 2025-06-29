import React, { useState } from "react";
import NotifyMsg from "./NotifyMsg";

const Notify = () => {
  const [toggleNotify, setToggleNotify] = useState(false);
  const [clearNotification, setClearNotification] = useState(false);

  const handleNotify = () => {
    setToggleNotify(!toggleNotify);
  };

  return (
    <>
      <button className="relative cursor-pointer" onClick={handleNotify}>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#f4b442"
            d="M19.66,26.34A3.66,3.66,0,1,1,16,22.68,3.66,3.66,0,0,1,19.66,26.34Z"
          />
          <path
            fill="#ffd066"
            d="M28.19,25.32a2.07,2.07,0,0,1-1.84,1H5.65A2,2,0,0,1,4.09,22.9L5.86,21a1,1,0,0,0,.27-.68V12.78a7.32,7.32,0,0,1,7.32-7.32h0V4.55A2.55,2.55,0,0,1,16,2a2.55,2.55,0,0,1,2.55,2.55v.91a7.32,7.32,0,0,1,7.32,7.32v7.54a1,1,0,0,0,.27.68l1.77,1.9A2.07,2.07,0,0,1,28.19,25.32Z"
          />
        </svg>
        {!clearNotification && (
          <span className="bg-red-500 absolute right-[3px] top-1 h-[6px] w-[6px] rounded-full"></span>
        )}
      </button>

      <NotifyMsg
        toggleNotify={toggleNotify}
        setToggleNotify={setToggleNotify}
        clearNotification={clearNotification}
        setClearNotification={setClearNotification}
      />
    </>
  );
};

export default React.memo(Notify);
