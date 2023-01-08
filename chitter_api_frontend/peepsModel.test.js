
const PeepsModel = require("./peepsModel.js")

describe("PeepsModel", () => {
    it("adds and returns all peeps", () => {
      const model = new PeepsModel();
      
      model.addPeep("I am tired");
      model.addPeep("I am hungry");
      model.addPeep("I am cold");

      expect(model.getPeeps()).toEqual(["I am tired", "I am hungry", "I am cold"]);
    })
  });
