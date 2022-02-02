function invokeAnything(callback:unknown) {
 if(typeof callback === 'function') {
   callback();
 }
}

invokeAnything(100);