const express = require('express');
const router = express.Router();

        /*     Importar modelo de usuários criado */
          const Users = require('../model/user');
/*     Importar modelo de usuários criado */

router.get('/', (req, res) => {
      /*Users.find({}, (err, data) => {}) */    
      Users.find({}, (err, data) => {
          if (err) return res.send({ error: 'Erro na consulta de usuários' });
              return res.send(data);
    });
/* Users.find({}, (err, data) => {}) */ 


  // let obj = req.query;
  // return res.send({message: 'Tudo ok com o método GET da rota de usuarios'})
});
      /*     POST  na raiz*/
    router.post('/', (req, res) => {
      let obj = req.query;
      return res.send({message: 'Tudo ok com o método Post da rota de usuarios'})
    });
/*     POST */

     /*       CREATE user */
router.post('/create', (req,res) => {
  
    //Sintaxe mais moderna
    const { email, password } = req.body; //bodyParser way

    if (!email || !password) return res.send({error: 'Dados insuficientes'});

    Users.findOne({email}, (err, data) => {
        if (err) return res.send({error: 'Erro ao buscar usuário'});
        if (data) return res.send({error: 'Usuário já registrado'});

        //se nao entrou em nenhum dos returns acima:
            //passando rquisito por requisito // Users.create({email: email, password: password})
        //como sei que só vou receber duas propriedades, posso fazer:
        Users.create(req.body, (err, data) => {
            if (err) return res.send({error: 'Erro ao criar usuário'});

            data.password = undefined;
            return res.send(data);
        });
    });
                              /* 
                              //Sem email e sem senha, não é possível criar usuário
                                //Forma antiga de fazer :
                                //const obj = req.body; //post == bodyParser ? ?
                                // if (!obj.email || !obj.password) return res.send({error: 'Dados insuficientes'});
                                */

  //return res.send({message: 'Seu usuário foi criado'});
});
/*       CREATE user */


module.exports = router;
