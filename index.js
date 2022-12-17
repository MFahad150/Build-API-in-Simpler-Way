// Importing Packages
const express = require("express");
const app = express();

// adding routes

app.get("/book", (req, res) => {
  res.send([
    {
      name: "Fahad",
      id: 1,
    },
    {
      name: "Eddie Broke",
      id: 2,
    },
  ]);
});

// Port
const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
