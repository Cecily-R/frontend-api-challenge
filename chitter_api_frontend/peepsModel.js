class PeepsModel {
  constructor() {
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }

  addPeep(newPeep) {
    newPeep.forEach(peep => {
      this.peeps.push(peep);
    });
  }

};

module.exports = PeepsModel;