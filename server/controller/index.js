const glob = require("glob");
const path = require("path");

const importModule = (app) => {
  try {
    glob
      .sync("**/*.js", { cwd: "./server/controller", ignore: ["index.js"] })
      .forEach((f) => {
        app.use(`/${f.slice(0, -3)}/`, require(path.join(__dirname, f)));
      });
  } catch (e) {
    throw e;
  }
};

module.exports = importModule;
