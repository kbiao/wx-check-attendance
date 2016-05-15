var superagent = require('superagent');

exports.bombpost = function (url,result) {
  superagent.post(url)
            .set('X-Bmob-Application-Id','b3d4b280ec90f5bad7e07adbc714b5ea')
            .set('X-Bmob-REST-API-Key','a6463a5aa5cd9da869b84a5544207756')
            .set('Content-Type','application/json')
            .send(result)
            .end(function(err,res){
              if (err) {
                console.log(err);
              }
              return res;
            });
}

exports.bombget = function (url,parms) {
  superagent.get(url +'/'+ parms)
            .set('X-Bmob-Application-Id','b3d4b280ec90f5bad7e07adbc714b5ea')
            .set('X-Bmob-REST-API-Key','a6463a5aa5cd9da869b84a5544207756')
            .end(function(err,res){
              if (err) {
                console.log(err);
              }
              console.log(res);
              return res;
            });
}
