const cp = require("child_process");
const path = require("path");

const cwd = path.join(__dirname);

const run = () => {
  cp.execSync(
    "./node_modules/rescript/rescript clean && ./node_modules/rescript/rescript build",
    { cwd },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
};

exports.run = run;
