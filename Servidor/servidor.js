require('colors');
let http=require('http');
let express=require('express');

let mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://BrunoH25:1234@brunoh.38qxu.mongodb.net/?retryWrites=true&w=majority&appName=BrunoH';
const client = new MongoClient(uri, { useNewUrlParser: true });

let app=express();
app.use(express.static('./public'));

app.set('view engine', 'ejs')
app.set('views', './views');

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())


let server=http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

let nome;
let senha;
let usuario;
let nascimento;
let estado;

app.get('/', function (requisicao, resposta){
    resposta.redirect('home.html')
})

app.get('/cadastra', function (requisicao, resposta){
    resposta.redirect('Cadastro.html')
})

app.get('/login', function (requisicao, resposta){
    resposta.redirect('Login.html')
})

app.get('/cadastro',function (requisicao, resposta){
    nome= requisicao.query.nome;
    senha= requisicao.query.senha;
    usuario= requisicao.query.usuario;
    nascimento= requisicao.query.nascimento;
    estado= requisicao.query.estado;
    if(nome==""||senha==""||usuario==""||nascimento==""||estado==""){
        resposta.render('resposta',{resposta: 'Falha',mensagem:"Erro ao cadastrar usuário!"})
    }
    else{
        resposta.redirect('Login.html')
    }
})

app.get('/logar',function (requisicao, resposta){
    let nome_log = requisicao.query.usuario;
    let senha_log = requisicao.query.senha;
    if(nome_log==usuario && senha_log==senha){
        resposta.render('resposta_login', {usuario,nome,nascimento,estado})
    }
    else{
        resposta.render('resposta',{resposta: "Falha",mensagem:"Usuário/senha não encontrado!"})
    }
})


app.post("/cadastrar_usuario", function(req, resp) {

    // salva dados no banco
    client.db("BrunoH").collection("usuarios").insertOne(
      { db_nome: nome, db_usuario: usuario, db_senha: senha, db_nasc: nascimento}, function (err) {
      if (err) {
        resp.render('resposta.ejs',{resposta: 'Falha',mensagem:"Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta.ejs', {resposta: 'Sucesso',mensagem: "Usuário cadastrado com sucesso!"})       
      };
    });
});

app.post("/logar_usuario", function(req, resp) {

    // busca um usuário no banco de dados
    client.db("BrunoH").collection("usuarios").find(
      {db_usuario: req.body.usuario, db_senha: req.body.senha }).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta.ejs', {resposta: "Falha",mensagem:"Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta.ejs', {resposta:"Falha",mensagem: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta.ejs', {resposta:"Sucesso",mensagem: "Usuário logado com sucesso!"})       
        };
    });
});

app.post("/cad_blog", function(req, resp) {

    // salva dados no banco
    client.db("BrunoH").collection("usuarios").insertOne(
      { db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo}, function (err) {
      if (err) {
        resp.render('resposta1.ejs',{resposta: 'Falha',mensagem:"Erro ao cadastrar blog!"})
      }else {
        resp.render('resposta1.ejs', {resposta: 'Sucesso',mensagem: "Blog cadastrado com sucesso!"})       
      };
    });
});