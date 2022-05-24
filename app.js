const express = require("express");
const app = express();
const user = require("./routes/user");
const database = require("./database/connection");
const PORT = process.env.PORT || 1500;

app.get("/", (req, res) => {
  res.send("Hello World This is Test Case");
});

//express.json Use as a middleware
app.use(express.json());

//Using Express middleware in this main file
app.use("/user", user);

app.listen(PORT, () => {
  console.log(`app is listening on : http://localhost:${PORT}`);
});
