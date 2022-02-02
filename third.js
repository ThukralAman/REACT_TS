function invokeAnything(callback) {
    if (typeof callback === 'function') {
        callback();
    }
}
invokeAnything(100);
