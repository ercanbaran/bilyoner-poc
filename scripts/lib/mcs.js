const MCS = require('sf-extension-mcs');
var options = {
    'backendId': 'XXXX', //required
    'baseUrl': 'XXXX', //required
    'androidApplicationKey': 'XXXX', //required only for analytics & events
    'iOSApplicationKey': 'XXXX', //required only for analytics & events
    'anonymousKey': 'XXXX' //required only to perform operations without logging in first
};
var mcs = module.exports = exports = new MCS(options);

mcs.startAutoFlushEvents(15000);
