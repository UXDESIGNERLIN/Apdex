import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
import { useEffect, useState } from "react";

const HomePage = () => {
  const [hosts, setHosts] = useState();
  const { getTopAppsByHost } = useService(data);
  useEffect(() => { 
    setHosts(getTopAppsByHost(testHost));   
  }, []); 
  const testHost = '95b346a0-17f4.abbigail.name'
  
  return(
    <>
    {hosts &&
      <ul>
        {hosts.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    }
    </>
  )
}

export default HomePage