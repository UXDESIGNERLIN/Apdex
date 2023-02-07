const useService = (data, desiredList) => {
  const getTopAppsByHost = (hostname) => data.get(hostname).slice(0, desiredList);

/*   const addAppToHost = (app) => {
    const hostApps = data.get(hostname) || [];
    setHostMap(new Map(hostMap).set(hostname, [...hostApps, app]));
  }; */

  return {
    getTopAppsByHost,
    //addAppToHost
  };
};

export default useService;
