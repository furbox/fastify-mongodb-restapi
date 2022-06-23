const Product = require("../models/product.model");

const getProducts = async (request, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = (request, reply) => {
  reply.send("Single Product");
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  await newProduct.save();
  reply.code(201).send(newProduct);
};

const deleteProduct = (request, reply) => {
  reply.send("deleting a product");
};

const updateProduct = (request, reply) => {
  reply.send("updating a product");
};

module.exports = { getProducts, getProduct, createProduct, deleteProduct, updateProduct };
