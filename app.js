const express = require('express');
const app = express();

    /* MONGO MONGOOSE */
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');

    //string de conexao mongodb+srv://usuario_admin:<password>@clusterapi-xqfuj.mongodb.net/test?retryWrites=true&w=majority

    const url = 'mongodb+srv://usuario_admin:Mindfreak10@clusterapi-xqfuj.mongodb.net/test?retryWrites=true&w=majority';
    const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

    mongoose.connect(url, options);
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('error', (err) => {
      console.log('Erro na conexão com o baco de dados');
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Aplicação desconectada do banco de dados');
    });
    mongoose.connection.on('connected', () => {
      console.log('Aplicação conectada do banco de dados');
    });

    //deprecation message correction
    //mongoose.connect(url, {useUnifiedTopology: true});

      /* MONGO MONGOOSE */


              /*BODY PARSER*/
                  // parse application/x-www-form-urlencoded
                   app.use(bodyParser.urlencoded({ extended: false }));
                  // parse application/json
                   app.use(bodyParser.json());

              /*BODY PARSER*/


    /* ROTAS */
const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
// const indexRoute = ('./Routes/index');
// const usersRoute = ('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);
    /* ROTAS */


                /*  app.get('/', (req, res) => {
                  let obj = req.query;
                  return res.send({message: `Tudo ok com o método GET! Voce passou o nome: ${obj.nome} com idade de ${obj.idade} anos`})
                });

                app.post('/', (req, res) => {
                  return res.send({message: 'Tudo Ok com o método POST!'})
                }); 
                */

app.listen(3000);

module.exports = app;