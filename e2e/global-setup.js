const fs = require('fs');

module.exports = () => {
  fs.writeFileSync('./global-setup', 'Global setup');
};

