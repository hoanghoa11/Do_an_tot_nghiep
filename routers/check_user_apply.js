module.exports = app => {
    var WorkApply = require('../controllers/work_apply');
    var router = require('express').Router();

    router.get('/:id', WorkApply.checkUserApply);

    app.use("/checkUserApply", router);
}
