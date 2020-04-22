


module.exports = {
  env: {
    development: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins: [
        ["module-resolver", {
          alias: {
            "@App": "./src"
          }
        }],
        ["emotion"]
      ]
    }
  }
};
