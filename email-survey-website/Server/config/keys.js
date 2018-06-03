// key.js to figure out which keys to return

if (process.env.NODE_ENV === 'production') {
    // In Prod enviornment return Production related keys.
    module.exports = require('./prod');
} else {
    // Return dev keys
    module.exports = require('./dev');
}