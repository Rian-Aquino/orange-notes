const config = {
  mongo: {
    options: {
      keepAlive: true,
      maxPoolSize: 50,
      socketTimeoutMS: 30000,
      autoIndex: false,
      retryWrites: false
    },
    url: 'mongodb+srv://superuser:admin@cluster0.9hbmxdb.mongodb.net/'
  },
  server: {
    host: 'localhost',
    port: '3333'
  }
};

export default config;
