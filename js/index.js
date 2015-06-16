var _ = require('lodash');

_.map([1, 2, 3], function (i) {
  console.log(i);
});

require('./a.js');
require('./b.js');
require('./c.js');
