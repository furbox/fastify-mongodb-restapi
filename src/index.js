const fastify = require("fastify")({
  logger: true,
});
const productRoutes = require("./routes/product.route");
require('./utils/mongoose');

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });

    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
