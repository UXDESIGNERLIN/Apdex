// data.service.js
import { useMemo } from 'react';
import hostsCollection from '../utils/hostsCollection';
//import sortByApdex from '../utils/sortByApdex';

const useService = (data) => {

  const getTopAppsByHost = () =>{
    console.log('get useService', hostsCollection(data))
    return hostsCollection(data)
   //{"e7bf58af-f0be.dallas.biz"}
  }
  
  const addAppToHosts = useMemo(() => (app) => {
    // logic to add an application with higher Apdex
  }, []);
  
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
