const PeepsModel = require('./peepsModel.js');
const PeepsView = require('./peepsView.js');
const PeepsClient = require('./peepsClient.js');

const client = new PeepsClient();
const model = new PeepsModel();
const view = new PeepsView(client, model);

view.displayPeeps();