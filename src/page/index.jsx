import useService from "../hooks/useService";
import data from '../data/host-app-data.json';
//import data from '../data/test.json';
import { useEffect, useMemo, useState } from "react";

const HomePage = () => {
  const [hosts, setHosts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const { getTopAppsByHost } = useService(data);
  useEffect(() => {
    //console.log(getTopAppsByHost(data), getTopAppsByHost(data)["e7bf58af-f0be.dallas.biz"])
    setHosts(getTopAppsByHost(data));
  }, []); 

   const items = useMemo(() => {
    return hosts.map((item, index) => <li key={index}>{Object.keys(item)}</li>);
  }, [hosts]); 
  return(
    <>
    <ul>
      {items}
    </ul>
    </>
  )
}

export default HomePage