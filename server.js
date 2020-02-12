const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "dist")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server up and listening on port ${port}`);
});