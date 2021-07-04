/**
实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出
 */
const fetch = require('node-fetch');

class ConcurrentRequest {
  urlList = [];
  concurrent = 3;
  idx = 0;
  resList = [];
  cb = () => {};
  finishedCount = 0;

  constructor(urlList, concurrent) {
    this.urlList = urlList;
    this.concurrent = concurrent;
  }
  run(cb) {
    this.cb = cb;
    // 添加三个请求
    for (let i = 0; i < this.concurrent; i++) {
      this.addTask();
    }
  }

  final() {
    this.cb && this.cb(this.resList);
  }

  addTask() {
    if (this.idx >= this.urlList.length) {
      return;
    }
    const idx = this.idx;
    // 添加一个请求
    const url = this.urlList[this.idx];
    // console.log('url', url);
    this.request(url)
      .then((res) => res.text())
      .then((res) => {
        // console.log('res.text();', res);
        this.resList[idx] = res;
        this.finishedCount++;
        this.next();
      });
    this.idx++;
  }

  next() {
    if (this._isFinished()) {
      this.final();
    } else {
      this.addTask();
    }
  }
  _isFinished() {
    return this.finishedCount === this.urlList.length;
  }

  // 异步请求
  request(url) {
    return fetch(url);
  }
}

const baseUrl = 'http://localhost:3000/';
const urlList = Array(4)
  .fill('')
  .map((_, i) => `${baseUrl}${i}`);
const num = 3;

function final(resList) {
  console.log('结果');
  resList.forEach((i) => {
    console.log(i);
  });
}

let reqMgmt = new ConcurrentRequest(urlList, num);
reqMgmt.run(final);
