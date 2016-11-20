const http = require('http');
const fs = require('fs');
const toMarkdown = require('to-markdown');
const argv = require('argv');

// get html from url
const urls = argv.run().targets;

const url = 'http://www.shayashi.jp/courses/2016/sui5kouki/20161102.html';

function iterateOver(urls, iterator, callback) {
  var i = 0;
  function report() {
    console.log(i);
    i += 1;

    if (i === urls.length) {
      callback();
    } else {
      iterator(urls[i], report);
    }
  }
  iterator(urls[i], report, i);
}

function getHtml(url, callback, report, i) {
  function fileSave(md) {
    fs.writeFile(`./examples/${new Date() }test${i}.md`, md, (err) => {
      if (err) {
        console.log(`Making md file error : ${err}`);
      }
      report();
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

iterateOver(urls, (url, report, i) => {
  getHtml(url, htmlToMarkdown, report, i);
}, () => console.log('all done'));

// change it to mdfile
