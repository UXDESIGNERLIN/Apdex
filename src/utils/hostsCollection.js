const hostsCollection = (data = []) => {
  const hostCounts = new Map();
  const hostApps = new Map();

  data.forEach((app) => {
    app.host.forEach((host) => {
      if (hostCounts.has(host)) {
        hostCounts.set(host, hostCounts.get(host) + 1);
      } else {
        hostCounts.set(host, 1);
        hostApps.set(host, []);
      }
      hostApps.get(host).push(app);
    });
  });

  hostApps.forEach((apps, host) => {
    hostApps.set(host, apps.sort((a, b) => b.apdex - a.apdex));
  });

  console.log('correct', hostApps)
  return hostApps;
};

export default hostsCollection;
