class MyModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const style = `
    <style>
    .user-card {
        background-color: #234d70;
        color: white;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        font-size: 1.2em;
        position: relative;
        overflow: hidden;
        padding: 0px 20px;
        display: flex;
      }
      .content-modal {
        height: 462px;
        flex-direction: column;
      }
      
      .content-modal > img {
        border-radius: 5px 20px 5px;
        width: 256px;
        height: 256px;
        object-fit: fill;
      }
      
    .modal {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        z-index:2;
      }
      #close{
        cursor: pointer;
        font-weight: 900;
        border-radius: 50%;
        font-size: 15px;
        background-color: white;
        border: 0;
        width: 32px;
        height: 32px;
      }
      </style>`;

    const template = `
      <div class="modal">
      <button id="close">X</button>
      <card-profile type="modal">
      </card-profile>
      </div>`;

    this.shadowRoot.innerHTML = `${style} ${template}`;
    const btn = this.shadowRoot.querySelector('#close');
    btn.addEventListener('click', () => this.close());
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'fullname') {
      this.shadowRoot.querySelector('h2').innerText = newVal;
    }
    if (attr === 'email') {
      this.shadowRoot.querySelector('p').innerText = newVal;
    }
    if (attr === 'image') {
      this.shadowRoot.querySelector('img').src = newVal;
    }
  }

  static get observedAttributes() {
    return ['fullname', 'image', 'email'];
  }

  open() {
    this.shadowRoot.querySelector('.modal').style.display = 'flex';
  }
  close() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }
}

customElements.define('my-modal', MyModal);
