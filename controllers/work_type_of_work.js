var WorkTypeOfWork = require('../models/work_type_of_work');
var Work = require('../models/work');

exports.create = (req, res) => {
  WorkTypeOfWork.bulkCreate(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findall = (req, res) => {
  WorkTypeOfWork.findAll()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findone = (req, res) => {
  WorkTypeOfWork.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  WorkTypeOfWork.destroy({ where: { workId: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  WorkTypeOfWork.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
