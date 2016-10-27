const http = require('http');
const htmlparser = require('htmlparser2');

// get html from url
const url = 'http://www.shayashi.jp/courses/2016/sui5kouki/20161026.html';

function getHtml(url, callback) {
  var body = '';
  http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', (res) => {
      // console.log(body);
      // res = JSON.parse(body);
      // console.log(res);
      callback(body);
    });
  }).on('error', (err) => {
    console.log(`Something is error : ${err.message}`);
  });
}

// make url to object
function parseHtml(rawHtml) {
  var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "script" && attribs.type === "text/javascript"){
            console.log("JS! Hooray!");
        }
    },
    ontext: function(text){
        console.log("-->", text);
    },
    onclosetag: function(tagname){
        if(tagname === "script"){
            console.log("That's it?!");
        }
    }
  }, {decodeEntities: true});
  parser.write(rawHtml);
  parser.end();
}

getHtml(url, parseHtml);

// change it to mdfile
