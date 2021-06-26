const express = require('express')
const app = express()
const data = require("./data.json")

app.use(express.json());


// Verbos HTTP ]
//GET : Receber dados de uma Resource 
//POST : Enviar dados ou informações para serem processados por um Resource
//PUT : Atualizar dados em um Resource 
//DELETE : deletar um Resource


// Posso dizer que Clients é o nome desse Resource ! 

app.get("/clients", function(req,res){
    res.json(data);
})
app.get("/clients:/id", function(req,res){
    const {id} = req.params 
    const clients = data.find(cli = cli.id = id)
    

    if(!client) return res.status(204).json();
    res.json(client);
})

app.post("/clients", function(req,res){
const {name, email} = req.body;

//Lógica de Salvar

req.json({ name, email});

})


app.put("/clients:/id", function(req,res){

    const {id} = req.params 
    const clients = data.find(cli = cli.id = id)
    if(!client) return res.status(204).json();

    const {name } = req.body; 

    client.name = name; 
    res.json(client)
})



app.delete("/clients:/id", function(req,res){

const {id} = req.params
const clientsFiltered= data.filter(client = client.id !== id);

res.json(clientsFiltered)
})



// boa prática: É importante que voCê crie diferentes verbos para cada tipo de ação, para ficar mais claro para quem está consumindo nossa API 
// Boa prática : Evitar por barras no final 
// Nunca deixar um cliente sem resposta 
// A medida que formos construindo pequenos pedaços entenderemos como funciona... 
app.listen(3000, function(){
    console.log("Server is running  ")
})