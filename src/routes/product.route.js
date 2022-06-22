const Product = require('../models/product.model');

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
    handler: (request, reply) => {
      reply.send("Create Product");
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
  }
];

module.exports = routes;
