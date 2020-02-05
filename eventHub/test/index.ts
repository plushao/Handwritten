import EventHub from "../src";

const eventHub = new EventHub();

console.assert(eventHub instanceof Object,'eventHub 是个对象');

// on emit
let called = false;
eventHub.on('xxx', (data) => {
    called = true;
    console.log('called:' + called);
    console.assert(data === '测试');
});

eventHub.emit('xxx','测试');

