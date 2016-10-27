const http = require('http');
const htmlparser = require('htmlparser2');

// get html from url
const url = 'http://www.shayashi.jp/courses/2016/sui5kouki/20161026.html';

function getHtml(url) {
  http.get(url, (res) => {
    var body = '';
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', (res) => {
      console.log(body);
      res = JSON.parse(body);
      console.log(res);
    });
  }).on('error', (err) => {
    console.log(`Something is error : ${err.message}`);
  });
}

// make url to object
const rawHtml = getHtml(url);
const handler = new htmlparser.DomHandler((err, data) => {
  console.log(data);
});
const parser = new htmlparser.Parser(handler);
parser.write(rawHtml);
parser.end();

// change it to mdfile
