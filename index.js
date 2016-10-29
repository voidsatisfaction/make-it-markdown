const http = require('http');
const fs = require('fs');
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
    res.on('end', () => {
      // console.log(body);
      // res = JSON.parse(body);
      // console.log(res);
      callback(body, (data) => {
        fs.writeFile('test.md', data, (err) => {
          console.log(`Making md file error : ${err}`)
        });
      });
    });
  }).on('error', (err) => {
    console.log(`html get request error : ${err.message}`);
  });
}
// make url to object
function parseHtml(rawHtml, callback) {
  const blockTag = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li',
  ];
  const openTagTable = {
    // tagName: output
    a: '[]()',
    h1: '# ',
    h2: '## ',
    h3: '### ',
    h4: '#### ',
    h5: '##### ',
    p: '\n',
    li: '- ',
  };
  const closeTagTable = {
    a: ':a',
  };
  var data = '';
  const parser = new htmlparser.Parser({
    onopentag(tagName, attribs) {
      data += openTagTable[tagName];
      if (attribs.href) {
        data += `${attribs.href}`;
      }
      if (tagName === 'body') {
        data = '';
      }
    },
    ontext(text) {
      if (text === '' || text === ' ' || text === '\n')
        return ;
      data += `${text}`;
    },
    onclosetag(tagName) {
      if (blockTag.includes(tagName)) {
        data += '\n\n';
      } else {
        data += closeTagTable[tagName];
      }
    },
  }, { decodeEntities: true });
  parser.write(rawHtml);
  parser.end();
  console.log(data);
  callback(data);
}

getHtml(url, parseHtml);

// change it to mdfile
