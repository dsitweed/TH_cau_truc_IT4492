import axios from "axios";

const products = [
  "6388495ead17774f86c4bd65",
  "6388495ead17774f86c4bd67",
  "6388495ead17774f86c4bd6b",
  "6388495ead17774f86c4bd69",
  "6388495ead17774f86c4bd71",
  "6388495ead17774f86c4bd73",
  "6388495ead17774f86c4bd75",
  "6388495ead17774f86c4bd77",
  "6388495ead17774f86c4bd79",
  "6388495ead17774f86c4bd7b",
  "6388495ead17774f86c4bd7d",
  "6388495ead17774f86c4bd81",
  "6388495ead17774f86c4bd7f",
  "6388495ead17774f86c4bd83",
  "6388495ead17774f86c4bd85",
  "6388495ead17774f86c4bd87",
  "6388495ead17774f86c4bd89",
  "6388495ead17774f86c4bd8b",
  "6388495ead17774f86c4bd6f",
  "6388495ead17774f86c4bd6d",
];

const colors = ["black", "white", "blue"];
// const colors = ["black"];

const sizes = ["S", "M", "L", "XL"];
// const sizes = ["S"];

var config = {
  method: "post",
  url: "http://localhost:5000/stock",
  headers: {
    "Content-Type": "application/json",
  },
};

products.forEach((product) => {
  colors.forEach((color) => {
    sizes.forEach((size) => {
      config.data = {
        product_id: product,
        size,
        color,
        quantity: 0,
      };
      console.log(config.data);
      const flip = Math.random();
      if (flip > 0.5) {
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error.message);
            process.exit();
          });
      }
    });
  });
});
