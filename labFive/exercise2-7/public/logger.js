
class Logger {
    constructor() {
      this.id = Math.floor(Math.random() * 1000000);
    }
  
    log(message) {
      console.log(`[${this.id}] ${message}`);
    }
  }
  
  module.exports = Logger;
  