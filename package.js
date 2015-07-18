Package.describe({
  name: "redcap3000:run-cli",
  summary: "Uses exec() to execute commands serverside.",
  version: "0.0.1",
  git: "https://github.com/redcap3000/run-cli"
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.use(['meteorhacks:npm@1.3.0'], ['server']);
  api.addFiles('runCli.js', ['server']);
  api.export('RunCli',['server']);
});

Package.onTest(function(api) {
  api.use(["redcap3000:run-cli",'meteorhacks:npm@1.3.0']);
  api.use('tinytest@1.0.0');
  api.addFiles(['runCli.js','runCli-test.js'], ['server']);
});