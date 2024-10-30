require('colors');
let http=require('http');
let express=require('express');

let nome;
let senha;
let usuario;
let nascimento;
let estado;

let app=express();
app.use(express.static('./public'));

let server=http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

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
    var nome = requisicao.query.nome;
    var senha = requisicao.query.senha;
    var usuario=requisicao.query.usuario;
    var nascimento=requisicao.query.nascimento;
    var estado=requisicao.query.estado;
    resposta.redirect('Login.html')
})

app.get('/logar',function (requisicao, resposta){
    var nome_log = requisicao.query.nome;
    var senha_log = requisicao.query.senha;
    if(nome_log==nome && senha_log==senha){
        resposta.render('resposta_login', {usuario,nome,nascimento,estado})
    }
})