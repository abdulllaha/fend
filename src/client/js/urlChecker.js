const VALID_URL = require('valid-url');


const VALID = (url) => Boolean(VALID_URL.isWebUri(`${url}`));

module.exports = {
    VALID,
};