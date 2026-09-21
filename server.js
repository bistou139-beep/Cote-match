const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cote & Match</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f6f8;
          margin: 0;
          padding: 20px;
          color: #111;
        }
        .box {
          max-width: 600px;
          margin: 30px auto;
          background: white;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 5px 20px rgba(0,0,0,.08);
        }
        h1 {
          margin-top: 0;
        }
        .ok {
          padding: 12px;
          background: #e7f7ed;
          border-radius: 10px;
          color: #176b36;
          margin: 15px 0;
        }
        button {
          width: 100%;
          padding: 14px;
          border: 0;
          border-radius: 10px;
          background: #111;
          color: white;
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>⚽ Cote & Match</h1>
        <div class="ok">✅ Application en ligne</div>
        <p>Plateforme française d'analyse football.</p>
        <p>Betclic / Bwin seront affichés uniquement lorsque les données autorisées sont disponibles.</p>
        <button onclick="alert('Cote & Match fonctionne !')">
          Tester l'application
        </button>
      </div>
    </body>
    </html>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    application: "Cote & Match"
  });
});

app.listen(PORT, () => {
  console.log(`Cote & Match démarré sur le port ${PORT}`);
});
