const redis = require('redis');
const publisher = redis.createClient();

export { publisher }