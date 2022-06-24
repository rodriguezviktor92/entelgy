import { getUsers } from './service/fetchUsers.js';

const usersList = document.getElementById('usersList');

/* const modal = document.querySelector('my-modal');
const closebtn = document.querySelector('#close');
 */
/* const card = document.querySelector('card-profile');
card.addEventListener('click', (e) => console.log(e.target.id)); */

/* closebtn.addEventListener('click', () => {
  modal.close();
}); */

async function showUsers() {
  const data = await getUsers();
  if (data.length) {
    data.forEach((user) => {
      const cardProfile = document.createElement('card-profile');

      cardProfile.setAttribute(
        'fullname',
        `${user.first_name} ${user.last_name}`
      );
      cardProfile.setAttribute('email', user.email);
      cardProfile.setAttribute('image', user.avatar);
      cardProfile.setAttribute('type', 'card');
      usersList.appendChild(cardProfile);
    });
  }
}

showUsers();
