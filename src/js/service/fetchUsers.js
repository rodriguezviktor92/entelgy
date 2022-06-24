function getUsers() {
  const users = localStorage.getItem('usersList');
  if (users) {
    return JSON.parse(users);
  } else {
    return Promise.allSettled([
      fetch('https://reqres.in/api/users?page=1').then((response) =>
        response.json()
      ),
      fetch('https://reqres.in/api/users?page=2').then((response) =>
        response.json()
      ),
    ]).then((values) => {
      const [{ value: page1 }, { value: page2 }] = values;
      if (page1.data.length && page2.data.length) {
        localStorage.setItem(
          'usersList',
          JSON.stringify([...page1.data, ...page2.data])
        );
        return [...page1.data, ...page2.data];
      }
    });
  }
}
export { getUsers };
