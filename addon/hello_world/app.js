// hello.js
"use strict";
const addon = require('./build/Release/addon');

console.log("返回了:\r\n"+addon.hello()); // 'world'