


module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
      plugins: [
        ["module-resolver", {
          alias: {
            "@App": "./src"
          }
        }]
      ]
    },
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
        }]
      ]
    }
  }
};
