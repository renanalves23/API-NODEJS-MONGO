const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let obj = req.query;
  return res.send({message: 'Tudo ok com o método GET da raiz'});
});

router.post('/', (req, res) => {
  let obj = req.query;
  return res.send({message: 'Tudo ok com o método Post da raiz'});
});



module.exports = router;
