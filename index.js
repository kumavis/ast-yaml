yaml = require('js-yaml');
fs   = require('fs');
esprima   = require('esprima');
treeify   = require('treeify').asTree;

// Get document, or throw exception on error
try {
  var input = fs.readFileSync('./example.js', 'utf8')
  // var doc = yaml.safeLoad();
  var output = esprima.parse(input)
  var doc = yaml.safeDump(output);
  console.log(doc);
  // console.log(treeify(output, true));
} catch (e) {
  console.log(e);
}