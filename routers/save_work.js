module.exports = app => {
    var SaveWork = require('../controllers/save_work');
    var router = require('express').Router();

    router.post("/", SaveWork.create);
    router.get('/', SaveWork.findall);
    router.get('/:id', SaveWork.findone);
    router.patch('/:id', SaveWork.update);

    app.use("/saveWorks", router);
}