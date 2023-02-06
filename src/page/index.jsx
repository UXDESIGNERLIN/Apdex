import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
import useHostMap from "../hooks/useHostMap";
import CardListGroup from "../components/CardListGroup";
import ListItem from "../components/ListItem";
const HomePage = () => {
  const { hostMap, addAppToHost } = useHostMap(data);
  const { getTopAppsByHost } = useService(hostMap, 25);
  const title = 'Apps by Host';

  
  return(
    <section>
      <h3>{title}</h3>
      {!hostMap.size ? 
        (<h1>Loading...</h1>) : 
        (<main>
          <div></div>
          {[...hostMap].map(([hostName]) => (
            <CardListGroup key={hostName} host={hostName}>
              {(getTopAppsByHost(hostName) || []).slice(0, 5).map((app, index) => (
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