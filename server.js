const express = require('express');
const app = express();

app.get('/:time', function (req, res) {
  const time = req.params.time || 0;
  console.log('接收' + time + 'start');
  setTimeout(() => {
    res.send('Hello World' + time);
    console.log('返回' + time);
  }, time * 1000);
});

app.listen(3000);
