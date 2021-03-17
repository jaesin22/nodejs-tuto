if(process.env.NODE_ENV === 'proeuction') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}