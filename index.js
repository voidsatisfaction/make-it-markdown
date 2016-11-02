const http = require('http');
const fs = require('fs');
const toMarkdown = require('to-markdown');
const argv = require('argv');

// get html from url
const urls = argv.run().targets;

const url = 'http://www.shayashi.jp/courses/2016/sui5kouki/20161102.html';

function iterateOver(urls, iterator, callback) {
  var doneCount = 0;
  function report() {
    doneCount += 1;

    if (doneCount === urls.length) {
      callback();
    }
  }

  for(var i = 0; i < urls.length; i++) {
    iterator(urls[i], report);
  }
}

function getHtml(url, callback) {
  function fileSave(md, callback) {
    fs.writeFile(`${ new Date() }test.md`, md, (err) => {
      console.log(`Making md file error : ${err}`);
    });
    callback();
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

iterateOver(urls, (url, report) => {
  getHtml(url, htmlToMarkdown);

}, () => console.log('all done'));

// change it to mdfile
