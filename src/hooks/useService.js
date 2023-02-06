const desiredList = 25;

const useService = () => {
  const getTopAppsByHost = (hostname, collecton) => collecton.get(hostname).slice(0, desiredList)
  

  return {
    getTopAppsByHost
  };
};

export default useService;
