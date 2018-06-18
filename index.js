var http = require('http');

module.exports = function(zenvia) {

    var host = 'api-rest.zenvia.com';

    var headers = {
        "Authorization": "Basic " + new Buffer(zenvia.username + ":" + zenvia.password, "utf8").toString("base64"),
        "Accept": "application/json",
        "Content-type": "application/json"
    };

    return {
        sendSms: function(body) {
            return new Promise(function(resolve, reject) {
                http.request({
                    host: host,
                    path: "/services/send-sms",
                    method: "POST",
                    headers: headers
                }, function(response) {
                    var body = '';
                    response.on('data', function(d) {
                        body += d;
                    });
                    response.on('end', function() {
                        resolve(body);
                    });
                    response.on('error', function(err) {
                        reject(err);
                    });
                }).end(JSON.stringify(body));
            });
        }
    };
};
