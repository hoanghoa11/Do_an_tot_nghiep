module.exports = (app) => {
    var SendMail = require('../controllers/send_mail');
    var router = require('express').Router();
  
    router.post('/', SendMail.send);
  
    app.use('/sendMail', router);
  };
  