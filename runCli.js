/*
 * RunCli
 * Run a command via exec() and npm.require('child_process'). Outputs to server console
 */

RunCli = {};

RunCli.run = function(command) { 

        exec = Npm.require('child_process').exec;

        runCommand = function (error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);

          if(error !== null) {
            console.log('exec error: ' + error);
          }
        }

        exec(command, runCommand);
        return true;
};