import { useEffect, useState } from "react";
import hostsCollection from "../utils/hostsCollection";

const useHostMap = (data) => {
  const [hostMap, setHostMap] = useState(new Map());
  
  useEffect(() => {
    setHostMap(hostsCollection(data));
  }, [data]);

  const addAppToHosts = (app) => setHostMap(hostsCollection([...data, app]));

  const removeAppFromHosts = ({name, host}) => {
    host.forEach((hostName) => {
      if (hostMap.has(hostName)) {
        let hostApps = hostMap.get(hostName);
        hostApps = hostApps.filter((app) => app.name !== name);
        if (hostApps.length) {
          hostMap.set(hostName, hostApps);
        } else {
          hostMap.delete(hostName);
        }
      }
    });
    setHostMap(new Map(hostMap))
  }

  return {
    hostMap,
    addAppToHosts,
    removeAppFromHosts
  };
}

export default useHostMap;