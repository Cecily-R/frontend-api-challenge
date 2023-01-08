class PeepsModel {
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

module.exports = PeepsModel;