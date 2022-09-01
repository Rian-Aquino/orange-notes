const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      poolSize: 50,
      autoIndex: false,
      retrywrites: false
    },
    url: 'mongodb+srv://superuser:admin@cluster0.9hbmxdb.mongodb.net/?retryWrites=true&w=majority'
  },
  server: {
    url: 'localhost',
    port: '3333'
  }
};

export default config;
