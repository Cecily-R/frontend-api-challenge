/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepsModel = require('./peepsModel.js');
const PeepsView = require('./peepsView.js');
const PeepsClient = require('./peepsClient.js');

jest.mock('./peepsClient.js');

describe("PeepsView", () => {
  describe('displays all peeps', () => {
    document.body.innerText = fs.readFileSync('./index.html');
    
    const model = new PeepsModel();
    const mockClient = new PeepsClient();
    const data = '[{"id": 3,"body": "my first peep :)","created_at": "2018-06-23T13:21:23.317Z","updated_at": "2018-06-23T13:21:23.317Z","user": {"id": 1,"handle": "kay"},"likes": [{"user": {"id": 1,"handle": "kay"}}]}]';
    
    mockClient.loadPeeps.mockImplementation((callback) => {
      const mockData = JSON.parse(data)
      return callback(mockData)
    });

    const view = new PeepsView(mockClient, model);

    expect(document.querySelector("id").textContent).toEqual(3);
    expect(document.querySelector("body").textContent).toEqual("my first peep :)");
  })  
});
