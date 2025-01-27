const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}${d.getSeconds()}`;
  return dateString;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'textplain' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'textplain' });
  response.write(hello);
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
