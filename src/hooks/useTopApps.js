const useTopApps = (data, desiredList) => {
  const getTopAppsByHost = (hostname) => data.get(hostname).slice(0, desiredList);

  return {
    getTopAppsByHost,
  };
};

export default useTopApps;
