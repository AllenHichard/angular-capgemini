/*const express = require('express')
//const path = require("path")

const app = express()

const PORT =  process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/angular-capgemini'))

app.get("/*", (req, res) =>
    res.sendFile(__dirname + "dist/angular-capgemini/index.html")
)

//callback
app.listen(PORT, ()=>{
    console.log("servidor iniciado na porta " + PORT)
})*/


const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${nomeApp}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});
 
app.listen(process.env.PORT || 8080);

