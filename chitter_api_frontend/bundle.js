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
          newPeep.forEach((peep) => {
            this.peeps.push(peep);
          });
        }
      };
      module.exports = PeepsModel2;
    }
  });

  // peepsView.js
  var require_peepsView = __commonJS({
    "peepsView.js"(exports, module) {
      var PeepsView2 = class {
        constructor(client2, model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-peep");
          this.client = client2;
          this.model = model2;
        }
        displayPeeps() {
          this.removeExistingPeeps();
          const peeps = this.model.getPeeps();
          peeps.forEach((peep) => {
            this.renderPeep(peep);
          });
        }
        removeExistingPeeps() {
          document.querySelectorAll(".peep").forEach((element) => {
            element.remove();
          });
        }
        renderPeep(peepJSON) {
          const peepEl = document.createElement("div");
          peepEl.className = "peep";
          this.mainContainerEl.append(peepEl);
          const peepContent = document.createElement("div");
          peepContent.className = "peep-content";
          peepContent.textContent = peepJSON.body;
          peepEl.append(peepContent);
          const peepAuthor = document.createElement("div");
          peepAuthor.className = "peep-author";
          peepAuthor.textContent = peepJSON.user.handle;
          peepEl.append(peepAuthor);
          const peepCreateAt = document.createElement("div");
          peepCreateAt.className = "peep-created-at";
          peepCreateAt.textContent = peepJSON.created_at;
          peepEl.append(peepCreateAt);
        }
        displayPeepsFromApi() {
          this.client.loadPeeps((peeps) => {
            this.model.addPeep(peeps);
            this.displayPeeps();
          });
        }
      };
      module.exports = PeepsView2;
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
  view.displayPeepsFromApi();
})();
