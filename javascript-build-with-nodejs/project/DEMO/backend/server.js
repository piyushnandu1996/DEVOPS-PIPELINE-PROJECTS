const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", server: "Jenkins-backend" });
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello Piyush Nandakar !!! NodeJS backend running on Jenkins" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

