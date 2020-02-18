const fs = require('fs');
function getConfigJsonAsync(path) {
   var file = fs.readFileSync(path);
   return JSON.parse(file)
}
exports.getConfigJsonAsync = getConfigJsonAsync;
