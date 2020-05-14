module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/hdfilm/" : "/",

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 400000,
      },
    },
  },
};
