class EventHub {
    cache = {};

    on(eventName, fn) {
        // 把fn 推进 this.cache[eventName] 数组
        if (this.cache[eventName] === undefined) {
            this.cache[eventName] = [];
        }
        this.cache[eventName].push(fn);
    }

    emit(eventName) {
        // 把this.cache[eventName] 数组里的 fn 全部依次调用
        let array = this.cache[eventName];
        if (array === undefined) {
            array = [];
        }
        array.forEach(fn => {
            fn();
        });
    }
}

export default EventHub
