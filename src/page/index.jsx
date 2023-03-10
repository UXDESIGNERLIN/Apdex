import useTopApps from "../hooks/useTopApps";
import data from '../data/host-app-data.json';
import useHostMap from "../hooks/useHostMap";
import CardListGroup from "../components/CardListGroup";
import ListItem from "../components/ListItem";
import MOCK_APP from "../__mocks__/app.fixture";
import { useState } from "react";
import Dialog from "../components/Dialog";
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";
import './HomePage.scss';

const HomePage = () => {
  const { hostMap, addAppToHosts, removeAppFromHosts } = useHostMap(data);
  const { getTopAppsByHost } = useTopApps(hostMap, 25);
  const [isTrigger, setTrigger] = useState(false);
  const [appClicked, setAppClicked] = useState(null);
  const [showGrid, setShowGrid] = useState(false);

  const title = 'Apps by Host';
  const userEmail = 'averylongemailadress@companyname.com';
  const checkBoxLabel = 'toggleList';
  const layout = showGrid ? 'Section__container--grid' : 'Section__container';

  // eslint-disable-next-line no-unused-vars
  const handleAdd = () => {
    addAppToHosts(MOCK_APP);
  }

  // eslint-disable-next-line no-unused-vars
  const handleRemove = () => {
    removeAppFromHosts(MOCK_APP);
  }

  const openDialog = (app) => {
    setTrigger(true);
    setAppClicked(app);
  }

  const closeDialog = () => {
    setTrigger(false);
  }

  const toggleLayout = (isGrid) => {
    setShowGrid(isGrid);
  }
  
  return(
    <main>
      <Header title={title} userEmail={userEmail}>
        <Checkbox label={checkBoxLabel} toggleLayout={toggleLayout} showGrid={showGrid} />
      </Header>
      {!hostMap.size ? 
        (<h2 aria-live="polite">Loading...</h2>) : 
        (<section className={layout}>
          {[...hostMap].map(([hostName]) => (
            <CardListGroup key={hostName} host={hostName}>
              {(getTopAppsByHost(hostName) || []).slice(0, 5).map((app, index) => (
                <ListItem 
                  key={index} 
                  app={app} 
                  toggleDialog={openDialog}
                />
              ))}
            </CardListGroup>
          ))}   
        </section>) 
      }
      {isTrigger && <Dialog toggleDialog={closeDialog} appClicked={appClicked}/>}
    </main>
  )
}

export default HomePage