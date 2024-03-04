const user=require('../models/user');
const Company=require('../models/company');
const role=require('../models/role');
const work=require('../models/work');
const typeOfWork=require('../models/type_of_work');
const tag=require('../models/tag');
const userRole=require('../models/user_role');
const company = require('../models/company');

//Env
require('dotenv').config();

const PAGE_SIZE=parseInt(process.env.PAGE_SIZE);

exports.create= (req,res)=>{
    const email=req.body.email;
    user.findAll({where:{email:email}})
        .then((data)=>{
            if(data.length!==0){
                res.json({data:"email đã tồn tại !!"});
            } else{
                company.findAll({where:{email:email}}).then((data)=>{
                    if(data.length!==0){
                        res.json({data:"email đã tồn tại !!"});
                    } else{
                        user.create(req.body,{
                            include:{model:userRole,as:'asUserRole'},
                        }).then((data)=>{
                            res.json({data:data});
                        }).catch((err)=>{
                            throw err;
                        })
                    }
                })
            }
        }).catch((err)=>{
            throw err;
        })
};

exports.findall = (req, res) => {
    var page1 = req.query.page;
    var status = req.query.status;
    let page = parseInt(page1);
    let soLuongBoQua = (page - 1) * PAGE_SIZE;
    if (page || status) {
      if (page && !status) {
        User.findAndCountAll({
          distinct: true,
          offset: soLuongBoQua,
          limit: PAGE_SIZE,
          include: [{ model: typeOfWork }, { model: tag }, { model: role }],
        })
          .then((data) => {
            res.json({ data: data });
          })
          .catch((er) => {
            throw er;
          });
      } else if (status && !page) {
        User.findAndCountAll({
          distinct: true,
          where: { status: status },
          include: [{ model: typeOfWork }, { model: tag }, { model: role }],
        })
          .then((data) => {
            res.json({ data: data });
          })
          .catch((er) => {
            throw er;
          });
      } else {
        User.findAndCountAll({
          distinct: true,
          where: { status: status },
          offset: soLuongBoQua,
          limit: PAGE_SIZE,
          include: [{ model: typeOfWork }, { model: tag }, { model: role }],
        })
          .then((data) => {
            res.json({ data: data });
          })
          .catch((er) => {
            throw er;
          });
      }
    } else {
      User.findAndCountAll({
        distinct: true,
        include: [{ model: typeOfWork }, { model: tag }, { model: role }],
      })
        .then((data) => {
          res.json({ data: data });
        })
        .catch((er) => {
          throw er;
        });
    }
  };
  
  exports.findone = (req, res) => {
    User.findOne({
      where: { id: req.params.id },
      include: [{ model: typeOfWork }, { model: tag }],
    })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  };
  
  exports.findSaveWork = (req, res) => {
    User.findOne({
      where: { id: req.params.id },
      include: [
        { model: typeOfWork },
        { model: tag },
        {
          model: work,
          attributes: [
            'id',
            'name',
            'companyId',
            'address',
            'dealtime',
            'price1',
            'price2',
          ],
          include: [{ model: company, attributes: ['name', 'avatar'] }],
        },
      ],
    })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  };
  
  exports.delete = (req, res) => {
    user.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  };
  
  exports.update = (req, res) => {
    user.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  };