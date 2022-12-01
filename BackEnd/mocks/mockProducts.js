import axios from "axios";

const products = [
  {
    name: "Antidorcas marsupialis",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Libellula quadrimaculata",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Tockus erythrorhyncus",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Alouatta seniculus",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Corvus albicollis",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Hippopotamus amphibius",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Tadorna tadorna",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Gymnorhina tibicen",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Neophoca cinerea",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Paroaria gularis",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Ceratotherium simum",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Panthera onca",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Ara ararauna",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Cereopsis novaehollandiae",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Ara macao",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Tamandua tetradactyla",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Streptopelia senegalensis",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Stercorarius longicausus",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Zenaida asiatica",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
  {
    name: "Ara chloroptera",
    supplierId: "6388435a0b332673d4e5e4d8",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    categories: ["6384c5500e492d8ffffc7ca4"],
  },
];

var config = {
  method: "post",
  url: "http://localhost:5000/api/products",
  headers: {
    "Content-Type": "application/json",
  },
};

products.map((product) => {
  config.data = product;
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      process.exit();
    });
});
