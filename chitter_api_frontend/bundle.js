(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // peepsModel.js
  var require_peepsModel = __commonJS({
    "peepsModel.js"(exports, module) {
      var PeepsModel2 = class {
        constructor() {
          this.peeps = [];
        }
        getPeeps() {
          return this.peeps;
        }
        addPeep(newPeep) {
          this.peeps.push(newPeep);
        }
      };
      module.exports = PeepsModel2;
    }
  });

  // peepsView.js
  var require_peepsView = __commonJS({
    "peepsView.js"() {
    }
  });

  // peepsClient.js
  var require_peepsClient = __commonJS({
    "peepsClient.js"(exports, module) {
      var PeepsClient2 = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = PeepsClient2;
    }
  });

  // index.js
  var PeepsModel = require_peepsModel();
  var PeepsView = require_peepsView();
  var PeepsClient = require_peepsClient();
  var client = new PeepsClient();
  var model = new PeepsModel();
  var view = new PeepsView(client, model);
  view.displayPeeps();
})();
