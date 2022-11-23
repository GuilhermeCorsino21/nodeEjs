const express = require('express');
const app = express();

// falando pro express q nossa view engine,
// vai ser renderizada pelo ejs

app.set("view engine", "ejs");

// criando uma rota
// app carrega tudo q tem dentro do express
// get é um metodo do express

app.get("/", function(req , res){
  const items = [

    {
      title: "D",
      message: "ev aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    {
      title: "V",
      message: "amos aprender a usar"
    }
  ];

  const subtitle = "O EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
  
  // Arquivos EJS Aceitam que sejam passados objetos para ele.

  res.render("pages/index" , {
      qualitys: items, 
      subtitle: subtitle,
  });  
})

app.get("/sobre", function(req , res){
  res.render("pages/about");  
})

// fazer o servidor rodar ( listen é uma funçao do express )
// index.ejs deve ser colocada dentro da pasta views por padrão, para ser encontrada pela rota no navegador

app.listen(8080);
console.log('rodando');