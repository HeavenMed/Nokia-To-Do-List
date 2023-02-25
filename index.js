const express = require('express')
const exphbs = require("express-handlebars")
const path = require('path')

//Importando Rotas
const tasksRoutes = require('./routes/tasksRoutes')

//Importando dados do models
const Task = require('./models/Task')

//Criando Instância App do express
const app = express()

//Conectando ao banco de dados
const conn = require('./db/conn')

//Template Engine Config
//app.engine('handlebars' , exphbs.engine({defaultLayout : 'main'}) )

//Handlebars
            app.set('view engine' , 'handlebars')
            app.set('views', path.join(__dirname, 'views'));
            app.engine('handlebars' , exphbs.engine({
                extname:'handlebars' ,
                defaultLayout : 'main' ,
                layoutsDir:  path.join(__dirname + '/views/layouts'), 
        }))
//Receber Respostas do Body
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
// Config a pasta Public
    app.use(express.static(__dirname + '/public'));


//
app.use('/tasks' , tasksRoutes )



conn.sync().then(()=> {
    app.listen(3002)
}).catch((err) => console.log(err))