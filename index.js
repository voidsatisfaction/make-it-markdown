const http = require('http');
const fs = require('fs');
const toMarkdown = require('to-markdown');

// get html from url
const url = 'http://www.shayashi.jp/courses/2016/sui5kouki/20161102.html';

function getHtml(url, callback) {
  function fileSave(md) {
    fs.writeFile('test2.md', md, (err) => {
      console.log(`Making md file error : ${err}`);
    });
  }
  var body = '';
  http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      // console.log(body);
      // res = JSON.parse(body);
      // console.log(res);
      callback(body, fileSave);
    });
  }).on('error', (err) => {
    console.log(`html get request error : ${err.message}`);
  });
}
// make url to object
function htmlToMarkdown(data, callback) {
  const md = toMarkdown(data);
  callback(md);
}

getHtml(url, htmlToMarkdown);

// change it to mdfile
