import { getUsers } from './service/fetchUsers.js';

const usersList = document.getElementById('usersList');

(async function showUsers() {
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
      usersList.appendChild(cardProfile);
    });
  }
})();
