import express from "express";
import Connection from "./database/db.js";
import route from "./database/routes/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({encoded: true}));
app.use('/',route)
Connection();
const PORT = 8000;
app.listen(PORT,()=>console.log('Server running on Port ',PORT))