import { req, res } from './__mocks__/args';

const getRandomColour = require('../../src/colour/random');

test('Get random colour', async () => {
  const colour = await getRandomColour(req(), res);

  expect(colour.name).toBeDefined();
  expect(colour.hex).toBeDefined();
});
