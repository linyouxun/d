// cgi-bin/deal/dealList

var express = require('express');
var router = express.Router();

router.get('/cgiBin', function(req, res, next) {
  res.json({name:'cgiBin'});
});
/* GET home page. */
router.get('/dealList', function(req, res, next) {
  console.log(req.query);
  const data = getJsonCgiBinDealDealList(req.query);
  res.json(data);
});





function getJsonCgiBinDealDealList(query){
  let listData = [];
  for (let i = 0; i < +query.page_size; i++) {
    listData.push({
        "advice":"测试内容a4x2",
        "all_prepared_time":"测试内容4u8j",
        "arrived_time":"测试内容6dq8",
        "cancel_time":"测试内容6164",
        "city_id":"测试内容go5j",
        "clinic_id":"测试内容5w8p",
        "clinic_name":"测试内容w47z",
        "deal_code":"测试内容75d5",
        "deal_create_time":"测试内容hon3",
        "deal_state":"14",
        "department_name":"测试内容85fl",
        "doctor_id":query.doctor_id,
        "doctor_image":"测试内容q36c",
        "doctor_name":"测试内容52c5",
        "doctor_title":"测试内容xmux",
        "member_no":"测试内容p77s",
        "patient_age":"测试内容llk7",
        "patient_birth":"测试内容h45o",
        "patient_id":"测试内容5d8d",
        "patient_image":"http://fakeimg.pl/70x70/?text=GST",
        "patient_name":"测试内容gx7k",
        "patient_sex":"测试内容693i",
        "patient_type":"测试内容6158",
        "payment_code":"测试内容baf4",
        "payment_return_time":"测试内容lt3d",
        "price":"测试内容uh03",
        "property":"测试内容716a",
        "recipe_desc":"测试内容f4ns",
        "recipe_num":13146,
        "recipe_time":new Date(),
        "reservation_phone":"测试内容437g",
        "reservation_sort_id":"56000",
        "reservation_start_time":"测试内容x31s",
        "schedule_id":"测试内容6r04",
        "ship_time":"测试内容uudl",
        "user_id":query.user_id,
        "deal_id":348000+i,
        "diagnose":switchIll(Math.ceil(Math.random()*4)),
        "reservation_end_time":(new Date() - Math.random()*100 * 24 * 60 * 60 * 1000)
    })
  }
  let data = {
      "status":"0",
      "deal_list":listData,
      "deal_total_num":query.page_size,
      "message":"success",
      "page_no":"1",
      "status":"0",
      "total_page":+query.page_size,
  }
  return data;
}

function switchIll(type){
  switch (type) {
    case 1:{
      return "感冒";
    }
    case 2:{
      return "发烧";
    }
    case 3:{
      return "感冒发烧";
    }
      break;
    default:{
      return "未知疾病";
    }
  }
}






module.exports = router;
