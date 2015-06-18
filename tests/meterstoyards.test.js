(function() {

  'use strict';

  var MetersToYards = require('../meterstoyards.js');

  describe('meterstoyards.js', function() {

    it('is a thing', function() {
      expect(MetersToYards).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of yards for number of meters given', function() {

        var mty = new MetersToYards();
        var input = 1;
        var output = 1.09361;

        expect(
          mty.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
