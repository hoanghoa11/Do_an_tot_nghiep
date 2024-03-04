const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('<h1>Test api</h1>')
});

require('./routers/login_company')(app);
require('./routers/login_user')(app);
require('./routers/login_admin')(app);
require('./routers/tag')(app);
require('./routers/statistical')(app);
require('./routers/send_mail')(app);
require('./routers/company')(app);
require('./routers/check_company')(app);
require('./routers/work')(app);
require('./routers/user')(app);
require('./routers/role')(app);
require('./routers/contact')(app);
require('./routers/type_of_work')(app);
require('./routers/new')(app);
require('./routers/social_network')(app);
require('./routers/candidate')(app);
require('./routers/recruiment')(app);
require('./routers/tag_new')(app);
require('./routers/tag_work')(app);
require('./routers/work_type_of_work')(app);
require('./routers/user_tag')(app);
require('./routers/save_work')(app);
require('./routers/work_id')(app);
require('./routers/check_login')(app);
require('./routers/delete_save_work')(app);
require('./routers/user_type_of_work')(app);
require('./routers/get_user_save_work')(app);
require('./routers/get_company_save_user')(app);
require('./routers/work_apply')(app);
require('./routers/check_work_apply')(app);
require('./routers/check_user_apply')(app);
require('./routers/form_cv')(app);
require('./routers/tag_form_cv')(app);
require('./routers/get_category_home')(app);
require('./routers/search_work')(app);
require('./routers/user_role')(app);

app.use(function (err, req, res, next) {
    res.status(500).send(err);
  });

app.listen(process.env.PORT || 7777, () => {
    console.log('Chào mừng bạn đến với Backend');
  });
   