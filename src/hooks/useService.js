import { useMemo } from 'react';
import hostsCollection from '../utils/hostsCollection';

const desiredList = 25;

const useService = (data) => {
  const getTopAppsByHost = (hostname) => hostsCollection(data).get(hostname).slice(0, desiredList)
  
  const addAppToHosts = () => {
    
  }
  
  const removeAppFromHosts = useMemo(() => (appId) => {
    // logic to remove an application with higher Apdex
  }, []);

  return {
    getTopAppsByHost,
    addAppToHosts,
    removeAppFromHosts,
  };
};

export default useService;
