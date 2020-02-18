import { req, res } from './__mocks__/args';

const getColourName = require('../../src/colour/name');

test('Get Colour Name', async () => {
  const colour = await getColourName(req({ query: { colour: 'ffffff' } }), res);
  expect(colour).toMatchObject({
    delta: 0,
    hex: '#ffffff',
    message: 'Exact Match',
    name: 'White',
    status: 1,
  });
});
