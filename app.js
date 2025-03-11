const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
const bodyParser = require("body-parser");
// const renderApi = require("@api/render-api");

// dotenv.config();
const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// app.get('', (req, res) => {
//     renderApi.auth(process.env.RENDER_API_KEY);
//     renderApi.listServices({ includePreviews: 'true', limit: '20' })
//       .then( data  => {return res.status(200).send({data: data})})
//       .catch(err => console.error(err));
//   })

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
