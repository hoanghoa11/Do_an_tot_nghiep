module.exports = (app) => {
    var WorkTypeOfWork = require('../controllers/work_type_of_work');
    var router = require('express').Router();
  
    router.post('/', WorkTypeOfWork.create);
    router.get('/', WorkTypeOfWork.findall);
    router.get('/:id', WorkTypeOfWork.findone);
    router.delete('/:id', WorkTypeOfWork.delete);
    router.patch('/:id', WorkTypeOfWork.update);
  
    app.use('/workTypeOfWorks', router);
  };
  