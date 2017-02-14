var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({name:"sss"});
});

router.post('/addaddress', function(req, res, next) {
  console.log(req.body);
  console.log(req.query);
  res.json({name:"sss"});
});

/* GET users listing. */
router.get('/queryaddresslist', function(req, res, next) {
  console.log(req.body);
  console.log(req.query);
  var data = {
    "current_page": 1,
    "data": [{
      'address':'天河路230号万菱汇国际中心A3507室',
      'address_id':'123',
      'area':'广东省广州市天河区',
      'area_id':'123',
      'contact_number':'15111111122',
      'is_default':1,
      'receiver_name':'笑不动笑不动笑不动笑不动笑不动笑不动笑不动笑不动笑不动',
      'user_id':'15111111122',
    },{
      'address':'天河路230号万菱汇国际中心A3507室',
      'address_id':'123',
      'area':'广东省广州市天河区',
      'area_id':'123',
      'contact_number':'15111111122',
      'is_default':0,
      'receiver_name':'笑不动',
      'user_id':'15111111122',
    },{
      'address':'天河路230号万菱汇国际中心A3507室',
      'address_id':'123',
      'area':'广东省广州市天河区',
      'area_id':'123',
      'contact_number':'15111111122',
      'is_default':0,
      'receiver_name':'笑不动',
      'user_id':'15111111122',
    }],
    "message": "测试内容t8wu",
    "status": "测试内容d86j",
    "total_num": 1,
    "total_page": 1
  }
  res.json(data);
});

module.exports = router;
