const net = require('net');
const port = 2628; // dict
const word = 'nada';

const client = net.createConnection({ port: port }, () => {
  client.write(`DEFINE spa-eng ${word}\r\n`);
});

let i = 0;

const regString = `\r\n151.*\r\n(.*)\r\n (.*)`

const regExp = new RegExp(regString, 'm')

client.on('data', (data) => {
  const res =
    data
    .toString()
    .match(regExp)

  if (res && res.length) {
    console.log(res);
    console.log(res[1]);
    console.log(
      res[2].split('; ')
      .map((word) => word.replace(/[\W\d]/g, ''))
    );
  }

  client.end();
});
client.on('end', () => {
});
