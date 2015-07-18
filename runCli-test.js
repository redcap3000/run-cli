Tinytest.add('runCli - init', function(test) {
  test.equal(typeof RunCli,'object','RunCli is not an object');
  test.equal(typeof RunCli.run,'function','RunCli.run not available.');
});

Tinytest.add('runCli - basic command',function(test){
  // expect to fail since we do not have process.env variables for authentication
  test.equal(RunCli.run('ls'),true,'RunCli.run("ls") failed.');
});
