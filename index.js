const http = require("http");
const app = require("./REST/app");
const PORT = 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("App is started on port " + PORT);
});
