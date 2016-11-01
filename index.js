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
  function changeToMD(temp) {
    const ignoreTag = {
      div: 1, span: 1, br: 1,
    };
    const inDirectTag = {
      ul: 1, ol: 1,
    };
    const directTag = {
      h1: '#', h2: '##', h3: '###', h4: '####', h5: '#####',
      hr: '---', li: '-', p: '\n'
    };

    const { tagName, attribs, text } = temp;
    console.log(tagName)
    // General case
    if (ignoreTag[tagName]) {
      return '';
    } else if (inDirectTag[tagName]) {
      temp.parent = tagName;
      return '';
    } else if (directTag[tagName] && text) {
      return `${directTag[tagName]} ${text}${'\n'}`;
    }
    // Special case
    switch (tagName) {
      case 'a':
        return `[${text}](${attribs.href})${'\n'}`;
      default:
        return '';
    }
  }
  var data = '';
  var temp = {};
  var isBody = false;
  const parser = new htmlparser.Parser({
    onopentag(tagName, attribs) {
      isBody = (tagName === 'body') ? true : isBody;
      if (isBody) {
        temp.tagName = tagName;
        temp.attribs = attribs;
      }
    },
    ontext(text) {
      if (isBody) {
        temp.text = text;
      }
    },
    onclosetag(tagName) {
      if (isBody) {
        data += changeToMD(temp);
        temp = {};
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
