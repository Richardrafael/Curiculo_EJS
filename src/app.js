const express = require('express')

const app = express();
const port = 5002;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("pagina_inicial")
  });

  app.get('/projetos', (req, res) => {
    res.render("projetos.ejs")
  });

  app.get('/experiencia', (req, res) => {
    res.render("experiencia.ejs")
  });

  app.get('/habilidades', (req, res) => {
    res.render("habilidades.ejs", {lista_habilidades: habilidade})
  });
  app.get('/projetos', (req, res) => {
    res.render("projetos.ejs")
  });
  app.get('/contato', (req, res) => {
    res.render("contato.ejs")
  });
  app.get('/spotify', (req, res) => {
    res.render("spotify.ejs")
  });
  app.get('/calculadora', (req, res) => {
    res.render("calculadora.ejs")
  });

app.use(express.static('public'));

app.listen(port, listenHandler);

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}



const modelo = require('./models/modelos');
var Habilidade = modelo.Habilidade; //Vinculação de tipo

let habilidade_1 = new Habilidade("HTML5" , "AVANÇADO"); 
let habilidade_2 = new Habilidade("CSS" , "AVANÇADO");
let habilidade_3 = new Habilidade("React" , "INTERMEDIARIO");    
let habilidade_4 = new Habilidade("React-native" , "INTERMEDIARIO");   
let habilidade_5 = new Habilidade("Javascript" , "AVANÇADO");  
let habilidade_6 = new Habilidade("Typescript" , "INTERMEDIARIO");    
let habilidade_7 = new Habilidade("Pacote office" , "INTERMEDIARIO");   
let habilidade_8 = new Habilidade("C ++" , "INTERMEDIARIO");   
let habilidade_9 = new Habilidade("Python" , "INTERMEDIARIO"); 
let habilidade_10 = new Habilidade("Metodologia Scrum" , "AVANÇADO"); 
let habilidade_11 = new Habilidade("Ingles" , "INTERMEDIARIO"); 
let habilidade = [];
habilidade.push(habilidade_1);
habilidade.push(habilidade_2);
habilidade.push(habilidade_3);
habilidade.push(habilidade_4);
habilidade.push(habilidade_5);
habilidade.push(habilidade_6);
habilidade.push(habilidade_7);
habilidade.push(habilidade_8);
habilidade.push(habilidade_9);
habilidade.push(habilidade_10);
habilidade.push(habilidade_11);