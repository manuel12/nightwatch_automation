const { timestamp } = require('../utils/utils');

exports.command = function (message) {
    return this.perform(function () {
        console.log(`[${timestamp()}][USER ACTION] - ${message}`);
    });
};