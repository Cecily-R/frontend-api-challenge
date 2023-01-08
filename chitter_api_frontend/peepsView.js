class PeepsView {
  constructor(client, model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-peep');
    this.client = client;
    this.model = model;
  }

  displayPeeps() {
    this.removeExistingPeeps();
    
    const peeps = this.model.getPeeps();
  
    peeps.forEach(peep => {
      this.renderPeep(peep);
    });
  };

  removeExistingPeeps() {
    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    })
  }

  renderPeep(peepJSON) {
    const peepEl = document.createElement('div');
    peepEl.className = 'peep';
    this.mainContainerEl.append(peepEl);

    const peepContent = document.createElement('div')
    peepContent.className = 'peep-content'
    peepContent.textContent = peepJSON.body
    peepEl.append(peepContent)

    const peepAuthor = document.createElement('div')
    peepAuthor.className = 'peep-author'
    peepAuthor.textContent = peepJSON.user.handle
    peepEl.append(peepAuthor)

    const peepCreateAt = document.createElement('div')
    peepCreateAt.className = 'peep-created-at'
    peepCreateAt.textContent = peepJSON.created_at
    peepEl.append(peepCreateAt)
  }


  displayPeepsFromApi() {
    this.client.loadPeeps((peeps) => {
      this.model.addPeep(peeps);
      this.displayPeeps();
    })
  };
};

module.exports = PeepsView;