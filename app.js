var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("still working!");
});

const port = process.env.PORT || 3030;

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});
