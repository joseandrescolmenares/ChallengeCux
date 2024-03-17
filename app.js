const express = require("express");
const app = express();
const config = require("./config/config");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const routeChatActivity = require("./routes/chat");

app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/", routes);

app.use("/chat", routeChatActivity);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
