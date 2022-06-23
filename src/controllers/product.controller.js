const Product = require("../models/product.model");

const getProducts = async (request, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = async (request, reply) => {
  const product = await Product.findById(request.params.id);
  return reply.code(200).send(product);
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  await newProduct.save();
  reply.code(201).send(newProduct);
};

const deleteProduct = async (request, reply) => {
  const product = await Product.findByIdAndDelete(request.params.id);
  return reply.code(200).send({ msg: "Producto Eliminado" });
};

const updateProduct = async (request, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    reply.code(200).send(product);
  } catch (error) {
    reply.code(200).send(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
