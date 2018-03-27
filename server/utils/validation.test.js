const expect = require('expect');

const {isRealString} = require('./validation');

  describe('isRealString', () => {
    it('should reject non-string values', () => {
      let str = isRealString(112);
        expect(str).toBe(false);
    });

    it('should reject string with only spaces', () => {
      let str = isRealString('   ');
       expect(str).toBe(false);
    });

    it('should allow string with non-space characters', () => {
      let str = isRealString('   LOTR');
        expect(str).toBe(true);
    });
  });
