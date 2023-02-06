import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
import { useEffect, useState } from "react";
import hostsCollection from "../utils/hostsCollection";

const HomePage = () => {
  const [hostMap, setHostMap] = useState(new Map());
  const { getTopAppsByHost } = useService(data);
  useEffect(() => { 
    setHostMap(hostsCollection(data));
  }, []);   

  const getHostList = () => {
    let hostList = [];
    if (hostMap) {
      for (const hostName of hostMap.keys()) {
        hostList.push(
          <>
            <h3>{hostName}</h3>
            <ul>
              {getTopAppsByHost(hostName).slice(0,5).map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        );
      }
    }
    return hostList;
  }
  
  return(
    <>
     {getHostList()}
    </>
  )
}

export default HomePage