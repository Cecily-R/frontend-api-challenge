const PeepsClient = require('./peepsClient.js');

require('jest-fetch-mock').enableMocks()

describe("peepsClient", () => {
  it('calls fetch and loads peep data from API', () => {
    const peepsClient = new PeepsClient();

    fetch.mockResponseOnce(JSON.stringify({
      id: 3,
      body: "my first peep :)"
    }));

    peepsClient.loadPeeps((returnedDataFromApi) => {
      expect(returnedDataFromApi.id).toBe(3)
      expect(returnedDataFromApi.body).toBe("my first peep :)")
    })

  })
});
