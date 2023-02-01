const express = require('express');
const app = express();

//View engine
app.set('view engine', 'ejs')

//arquivos estáticos
app.use(express.static('public'))

//Rotas
app.get('/', (req, res)=>{
    res.render("index.ejs")
})

app.get('/pagina1', (req, res)=>{
    res.render("pagina1.ejs")
})

app.get('/pagina2', (req, res)=>{
    res.render("pagina2.ejs")
})

app.listen(8085, ()=>{
    console.log('App iniciado em http://localhost:8085')
})