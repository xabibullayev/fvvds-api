const req = {
  body: {
    title: "Onecloud",
    id: "123",
    price: 200000,
  },

  params: {
    name: "John",
  },
};

const { name } = req.params;

console.log(name);
