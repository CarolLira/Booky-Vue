const mixinMethods = {
  methods: {
    getBooksList() {
      return fetch('http://localhost:3000/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => console.log(err));
    },
  },
};

export default mixinMethods;
