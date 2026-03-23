const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/message", (req, res) => {
  res.json({
    app: "Azure Lab Full Stack App",
    message: "Hello from Node.js backend",
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/echo", (req, res) => {
  const { text = "" } = req.body;
  res.json({
    original: text,
    echo: text.toUpperCase(),
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
