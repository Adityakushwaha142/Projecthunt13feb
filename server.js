const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello world ");
});
app.listen(2424, () => {
  console.log("server started on http://localhost:2424");
});
