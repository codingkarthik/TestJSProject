var util = require('../../util')

describe("Basic Addition Test", function() {
    it("failed addition", function() {
      expect(2+2).toBe(4);
    });
  });

  describe("Util Multiplication Test", function() {
    it("Multiplying 2 nums", function() {
      expect(util.multiply(2,2)).toBe(4);
    });
    it("Multiplying 2 string", function() {
        expect(util.multiply('2','22')).toBe(44);
        expect(util.multiply('2','22')).not.toBe('44');
    });
    it("Multiplying 1 string 1 num", function() {
        expect(util.multiply('2',22)).toBe(44);
        expect(util.multiply('2',22)).not.toBe('44');
    });
  });