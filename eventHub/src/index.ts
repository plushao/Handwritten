class EventHub {
    cache = {};

    on(eventName, fn) {
        // 把fn 推进 this.cache[eventName] 数组
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }

    emit(eventName) {
        // 把this.cache[eventName] 数组里的 fn 全部依次调用
        (this.cache[eventName] || []).forEach(fn => fn());
    }
}

export default EventHub
