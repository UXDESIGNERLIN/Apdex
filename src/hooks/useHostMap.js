import { useEffect, useState } from "react";
import hostsCollection from "../utils/hostsCollection";

const useHostMap = (data) => {
  const [hostMap, setHostMap] = useState(null);

  useEffect(() => {
    setHostMap(hostsCollection(data));
  }, [data]);

  return hostMap;
};

export default useHostMap;