const fs = require('fs');

module.exports = () => {
  fs.writeFileSync('./global-teardown', 'Global teardown');
};
