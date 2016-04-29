module.exports = {
 //mongodb://root:root@120.25.76.226:27017/app
  //mongodb://{name}:{passwd}@{ip:port}/{databases}
  "database":"mongodb://root:root@120.25.76.226:27017/app",
  "port":process.env.PORT || 3000,
  "secretKey" : "123456789"

};
