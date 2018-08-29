var fs = require('fs');
var sudo = require('./');
var exec = require('child_process').exec;

function kill(end) {
  if (process.platform === 'win32') return end();
  exec('sudo -k', end);
}

function icns() {
  if (process.platform !== 'darwin') return undefined;
  var path = '/Applications/Electron.app/Contents/Resources/Electron.icns';
  try {
    fs.statSync(path);
    return path;
  } catch (error) {}
  return undefined;
}

kill(
  function() {
    var options = {
      icns: icns(),
      name: 'Electron',
      stream: true
    };
    var command = (process.platform === 'win32') ? 'for /l %x in (1, 1, 100) do echo %x' : 'dmesg -w';
    var willkill = false;
    console.log('sudo.exec(' + JSON.stringify(command) + ', ' + JSON.stringify(options) + ')');
    sudo.exec(command, options,
      function(error, stdout, stderr) {
        console.log('error: ' + error);
        // stdout.pipe(process.stdout);
        if (!willkill) {
          willkill = true;
          setTimeout(function() {
            kill(
              function() {
                if (error) throw error;
                console.log('OK');
                process.exit(0);
              }
            );
          }, 1000);
        }
      }
    );
  }
);
