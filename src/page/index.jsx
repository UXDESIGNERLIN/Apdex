import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
import useHostMap from "../hooks/useHostMap";

const HomePage = () => {
  const { getTopAppsByHost } = useService(data);
  const hostMap = useHostMap(data);

  const getHostList = () => {
    let hostList = [];
    if (hostMap) {
      for (const hostName of hostMap.keys()) {
        hostList.push(
          <div key={hostName}>
            <h3>{hostName}</h3>
            <ul>
              {getTopAppsByHost(hostName,hostMap).slice(0,5).map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
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