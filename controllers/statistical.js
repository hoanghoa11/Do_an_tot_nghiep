const Company=require('../models/company');
const User=require('../models/user');
const Work=require('../models/work');
const New=require('../models/new');
const TypeOfWork=require('../models/type_of_work');

exports.quantity = async (req, res) => {
    let numCompany = await Company.count({ distinct: true });
    let numUser = await User.count({ distinct: true });
    let numTypeOfWork = await TypeOfWork.count({ distinct: true });
    let numWork = await Work.count({ distinct: true });
    let numWorkActive = await Work.count({
      distinct: true,
      where: { status: 1 },
    });
    let numWorkUnActive = await Work.count({
      distinct: true,
      where: { status: 0 },
    });
    let numNew = await New.count({ distinct: true });
    let numNewActive = await New.count({
      distinct: true,
      where: { status: 1 },
    });
    let numNewUnActive = await New.count({
      distinct: true,
      where: { status: 0 },
    });
    res.json({
      data: {
        numCompany,
        numUser,
        numWork,
        numWorkActive,
        numWorkUnActive,
        numNew,
        numNewActive,
        numNewUnActive,
        numTypeOfWork,
      },
    });
  };