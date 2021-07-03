/**
    实现一个LazyMan，可以按照以下方式调用:

    LazyMan("Hank")输出:

    Hi! This is Hank!

done

    LazyMan("Hank").sleep(10).eat("dinner")输出

    Hi! This is Hank!

    //等待10秒..
    Wake up after 10
    Eat dinner~

done

    LazyMan("Hank").eat("dinner").eat("supper")输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~

done
     
    LazyMan("Hank").sleepFirst(5).eat("supper")输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
     
    以此类推。
 */

class LazyMan {
  tasks = [];
  constructor(name) {
    this.name = name;
    // this.say();
    // this.tasks.push(this.say);
    // this.pushTask(() => this.say)
    this.say();
    // this.run();
    setTimeout(() => {
      this.run();
    }, 0);
  }
  say() {
    this.pushTask((cb) => {
      console.log(`Hi! This is ${this.name}`);
      cb && cb();
    });
    // this.run();
    return this;
  }
  eat(food) {
    this.pushTask((cb) => {
      console.log(`Eat ${food}~`);
      cb && cb();
    });
    // this.run();
    return this;
  }
  sleep(time) {
    this.pushTask((cb) => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        cb && cb();
      }, time * 1000);
    });
    // this.run();
    return this;
  }
  sleepFirst(time) {
    this.unshiftTask((cb) => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        cb && cb();
      }, time * 1000);
    });
    return this;
  }
  run() {
    // this.tasks.forEach((task) => task());
    if (this.tasks.length > 0) {
      const task = this.tasks.shift();
      task(() => this.run());
    }
  }
  pushTask(newTask) {
    this.tasks.push(newTask);
  }
  unshiftTask(newTask) {
    this.tasks.unshift(newTask);
  }
}

console.log(new LazyMan('Hank').sleepFirst(5).eat('supper'));
