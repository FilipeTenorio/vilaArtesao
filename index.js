// Imports

require('dotenv').config()
require('jsonwebtoken');

// Credenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const port = process.env.PORT;

// Import mongoose.
const mongoose = require('mongoose')

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@viladatabase.gtds4qm.mongodb.net/`
    ).then(() => {
        app.listen(port)
        console.log('Conectou com o banco!')
    }).catch((err) => console.log(err))


// Import express
const express = require('express')

// Atribuindo express a nossa variável app.
const app = express()


// Passando o roteador do usuario.
const produtoRouter = require('./routes/produtoRouter');
const artesaoRouter = require('./routes/artesaoRouter');
const eventoRouter = require('./routes/eventoRouter');
const chaleRouter = require('./routes/chaleRouter');



// Definindo o método de comunicação do express como JSON.
app.use(express.json());


// Usando as rotas
app.use('/api', produtoRouter);
app.use('/api', artesaoRouter);
app.use('/api', eventoRouter);
app.use('/api', chaleRouter);







