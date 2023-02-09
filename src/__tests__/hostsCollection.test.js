import hostsCollection from '../utils/hostsCollection';

describe('hostsCollection', () => {
  it('should return a Map of hostApps', () => {
    const data = [
      { host: ['host1'], apdex: 80 },
      { host: ['host1', 'host2'], apdex: 90 },
      { host: ['host2'], apdex: 70 },
    ];
    const expectedResult = new Map([
      ['host1', [
        { host: ['host1', 'host2'], apdex: 90 },
        { host: ['host1'], apdex: 80 },
      ]],
      ['host2', [
        { host: ['host1', 'host2'], apdex: 90 },
        { host: ['host2'], apdex: 70 },
      ]],
    ]);

    const result = hostsCollection(data);
    expect(result).toEqual(expectedResult);
  });
});
