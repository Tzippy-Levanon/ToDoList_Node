import renderApi from '@api/render-api';
import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const port =process.env.PORT || 3001
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

app.get('', (req, res) => {
  renderApi.auth(process.env.RENDER_API_KEY);
  renderApi.listServices({ includePreviews: 'true', limit: '20' })
    .then( data  => {return res.status(200).send({data: data})})
    .catch(err => console.error(err));
})

app.listen(port, () => {
  console.log(`my application is listening on http://localhost:${port}`);
})