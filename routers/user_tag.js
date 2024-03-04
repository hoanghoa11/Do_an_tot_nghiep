module.exports = app => {
    var UserTag = require('../controllers/user_tag');
    var router = require('express').Router();

    router.post("/", UserTag.create);
    router.get('/', UserTag.findall);
    router.get('/:id', UserTag.findone);
    router.delete('/:id', UserTag.delete);
    router.patch('/:id', UserTag.update);

    app.use("/userTags", router);
}