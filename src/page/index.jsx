import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
import useHostMap from "../hooks/useHostMap";
import CardListGroup from "../components/CardListGroup";
import ListItem from "../components/ListItem";

const HomePage = () => {
  const { getTopAppsByHost } = useService(data);
  const hostMap = useHostMap(data);
  const title = 'Apps by Host'

/*   const getHostList = () => {
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
  } */
  
  return(
    <section>
      <h3>{title}</h3>
      {!hostMap.size ? 
        (<h1>Loading...</h1>) : 
        (<main>
          {[...hostMap].map(([hostName]) => (
            <CardListGroup key={hostName} host={hostName}>
              {(getTopAppsByHost(hostName, hostMap) || []).slice(0, 5).map((app, index) => (
                <ListItem key={index} app={app}></ListItem>
              ))}
            </CardListGroup>
          ))}
        </main>) 
      }
    </section>
  )
}

export default HomePage