class CardProfile extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById('profile');
    this.card = document.importNode(this.template.content, true);
  }
  connectedCallback() {
    this.appendChild(this.card);
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
  }
  static get observedAttributes() {
    return ['fullname', 'image', 'email'];
  }
}

window.customElements.define('card-profile', CardProfile);
