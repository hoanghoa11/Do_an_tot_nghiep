module.exports = app => {
    var SaveWork = require('../controllers/save_work');
    var router = require('express').Router();

    router.delete("/:id", SaveWork.delete);


    app.use("/deleteSaveWorks", router);
}