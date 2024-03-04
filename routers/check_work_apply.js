module.exports = app => {
    var WorkApply = require('../controllers/work_apply');
    var router = require('express').Router();

    router.get('/:id', WorkApply.checkWorkApply);

    app.use("/checkWorkApply", router);
}