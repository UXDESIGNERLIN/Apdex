import { useEffect, useMemo, useState } from 'react';
import hostsCollection from '../utils/hostsCollection';
import useHostMap from './useHostMap';

const desiredList = 25;

const useService = (data) => {


  const getTopAppsByHost = (hostname, collecton) => collecton.get(hostname).slice(0, desiredList)
  
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
