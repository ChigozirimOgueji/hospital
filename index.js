import express from 'express';
import connectToMongodb from "./configs/database.config.js"

const app = express();

import indexMiddleware from './middlewares/index.middleware.js';
indexMiddleware(app);

app.listen(9871, ()=>{
    connectToMongodb();
    console.log("App running on port 9871")
})

// DATABASE => MODEL => SERVICE => CONTROLLER => ROUTE => INDEXROUTE => INDEXMIDDLEWARE => VALIDATEMIDDLEWARE => SCHEMA => ROUTE TO CALL VALIDATE AND SCHEMA => APP.JS