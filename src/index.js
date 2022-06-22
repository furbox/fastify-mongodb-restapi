const fastify = require('fastify')({
    logger:true
});

const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
}

start();