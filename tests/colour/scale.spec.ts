import { req, res } from './__mocks__/args';

const getScale = require('../../src/colour/scale');

test('Get Scale', async () => {
  const colour = await getScale(req({ query: { colour: '2e5bff' } }), res);

  expect(colour).toMatchObject({
    scale: [
      '#000069',
      '#1e1d7c',
      '#3c3b8f',
      '#5958a1',
      '#7775b4',
      '#9592c7',
      '#b3b0da',
      '#d0cdec',
      '#eeeaff',
    ],
  });
});
