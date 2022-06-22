const Product = require("../models/product.model");

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: async (request, reply) => {
      const products = await Product.find();
      return products;
    },
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: (request, reply) => {
      reply.send("Single Product");
    },
  },
  {
    url: "/products",
    method: "POST",
    handler:async (request, reply) => {
      const newProduct = new Product(request.body);
      await newProduct.save();
      reply.code(201).send(newProduct);
    },
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: (request, reply) => {
      reply.send("deleting a product");
    },
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: (request, reply) => {
      reply.send("updating a product");
    },
  },
];

module.exports = routes;
