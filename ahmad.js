var find = require('find');
var chalk = require('chalk');

find.file(/\.js$/, __dirname, function(files) {
  files.forEach(element => {
      var x=element;
      console.log(chalk.blue(x));
  });
})
