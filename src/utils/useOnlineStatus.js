import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //we have to check the internet for oncuechange, when user loads. Browser has a property online, and the method addEventListener.
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
