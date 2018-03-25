const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'Ken';
    let text = 'Hi Sweets!';
    let message = generateMessage(from, text);

      expect(message).toMatchObject({from, text});
      expect(typeof message.createdAt).toBe('number');

  });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
      let from = 'shanizzle';
      let latitude = 15;
      let longitude = 19;
      let url = 'https://www.google.com/maps?q=15, 19';
      let message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});
