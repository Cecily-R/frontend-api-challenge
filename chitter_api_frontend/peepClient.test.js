const PeepsClient = require('./peepsClient.js');

require('jest-fetch-mock').enableMocks()

describe("peepsClient", () => {
  it('calls fetch and loads peep data from API', () => {
    const peepsClient = new PeepsClient();

    fetch.mockResponseOnce(JSON.stringify({
      id: 72,
      handle: "Laura1995"
    }));

    peepsClient.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.id).toBe(72)
      expect(returnedDataFromApi.handle).toBe("Laura1995")
    })

  })
});
