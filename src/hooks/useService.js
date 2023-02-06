import { useMemo } from 'react';
import hostsCollection from '../utils/hostsCollection';

const useService = (data) => {
  const getTopAppsByHost =  hostsCollection(data);
  
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
