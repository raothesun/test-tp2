var fs = require('fs');
fs.readdirSync('src/').forEach(function (file) {
    eval(fs.readFileSync('src/' + file) + '');
});

var Jasmine = require('jasmine');
var jasmine = new Jasmine();


jasmine.loadConfig({
    "spec_dir": "test/unit",
    "spec_files": [
        "**/**.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false

});
jasmine.execute();