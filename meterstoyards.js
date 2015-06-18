(function() {

  'use strict';

  var MetersToYards = function() {};

  MetersToYards.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 1.09361;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MetersToYards;
    } else {
      exports.MetersToYards = MetersToYards;
    }
  } else {
    window.MetersToYards = MetersToYards;
  }

})();
