
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

app.get("/api/chat", (req, res) => {
  res.json({
    respuesta: "¡Hola! Soy Derek AI. ¡Estoy creciendo! 🤖💙"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Derek AI está funcionando");
});
