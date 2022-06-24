class CardProfile extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById('profile');
    this.card = document.importNode(this.template.content, true);
  }
  openModal(user) {
    const modal = document.querySelector('my-modal');
    modal.setAttribute('fullname', user.getAttribute('fullname'));
    modal.setAttribute('email', user.getAttribute('email'));
    modal.setAttribute('image', user.getAttribute('image'));
    modal.open();
  }

  connectedCallback() {
    this.appendChild(this.card);
    this.addEventListener('click', () => this.openModal(this));
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'fullname') {
      this.card.querySelector('h2').innerText = newVal;
    }

    if (attr === 'email') {
      this.card.querySelector('p').innerText = newVal;
    }

    if (attr === 'image') {
      this.card.querySelector('img').src = newVal;
    }

    if (attr === 'type' && newVal === 'modal') {
      this.card.querySelector('.user-card').classList.add('content-modal');
    }
    if (attr === 'type' && newVal === 'card') {
      this.card.querySelector('.user-card').classList.add('content-card');
    }
  }
  static get observedAttributes() {
    return ['fullname', 'image', 'email', 'type'];
  }
}

window.customElements.define('card-profile', CardProfile);
