const alias = require("alias-reuse");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ...alias.fromFile(__dirname, "./tsconfig.json").toJest(),
    "\\.ts\\?worker$": "<rootDir>/src/lib/navigator/worker.ts",
  },
  testRegex: "\\.test\\.tsx?$",
};
