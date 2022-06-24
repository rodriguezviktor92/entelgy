const page1 = fetch('https://reqres.in/api/users?page=1').then((response) =>
  response.json()
);
const page2 = fetch('https://reqres.in/api/users?page=2').then((response) =>
  response.json()
);

function getUsers() {
  const users = localStorage.getItem('userList');
  if (users) {
    console.log(users);
  } else {
    return Promise.allSettled([page1, page2]).then((values) => {
      const [{ value: page1 }, { value: page2 }] = values;
      if (page1.data.length && page2.data.length) {
        return [...page1.data, ...page2.data];
      }
    });
  }
}
export { getUsers };
