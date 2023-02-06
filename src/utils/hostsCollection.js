const hostsCollection = (data) => {
  const hostMap = new Map();

  data.forEach((app) => {
    app.host.forEach((host) => {
      if (hostMap.has(host)) {
        hostMap.get(host).push(app);
      } else {
        hostMap.set(host, [app]);
      }
    });
  });
  hostMap.forEach((apps) => {
    apps.sort((a, b) => b.apdex - a.apdex)
  });
  return hostMap;
};

export default hostsCollection;