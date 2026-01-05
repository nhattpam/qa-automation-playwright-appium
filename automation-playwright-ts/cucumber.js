module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require src/test/api/steps/**/*.ts",
    "--require src/test/ui/steps/**/*.ts",
    "--require src/test/support/world.selector.ts",
    "--require src/test/support/hooks.ts",
    "--require src/test/support/hooks.api.ts",  // API hooks
    // "--require src/test/support/world.ts",
    // "--require src/test/support/world.api.ts",  
    "--format @cucumber/pretty-formatter",
    "--publish-quiet",
    "src/test/**/*.feature"
  ].join(" ")
};
