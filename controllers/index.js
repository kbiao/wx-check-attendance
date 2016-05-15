var bomb = require('./bomb.js');
var superagent = require('superagent');
exports.userSignup = function (req,res) {

  var user = {
    "username" : req.body.username,
    "password" : req.body.stuNum,
    "college" : req.body.college,
    "className" : req.body.classNum,
    "stuNum" : req.body.stuNum
  }

  // var string = JSON.stringify(user);
  bomb.bombpost("https://api.bmob.cn/1/users",user);
  // superagent.post("https://api.bmob.cn/1/users")
  //           .set('X-Bmob-Application-Id','b3d4b280ec90f5bad7e07adbc714b5ea')
  //           .set('X-Bmob-REST-API-Key','a6463a5aa5cd9da869b84a5544207756')
  //           .set('Content-Type','application/json')
  //           .send(user)
  //           .end(function(err,res){
  //             // if (err) {
  //             //   console.log(err);
  //             // }
  //             console.log(res);
  //           });
}
