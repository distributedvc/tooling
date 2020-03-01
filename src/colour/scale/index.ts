import chroma from 'chroma-js';

module.exports = async (req, res): Promise<void> => {
  const { colour } = req.query;

  if (!colour) {
    res.status(400);
    res.send('Bad Request');
  }

  const min = chroma(`#${colour}`)
    .darken(3)
    .hex();

  const max = chroma(`#${colour}`)
    .brighten(3)
    .hex();

  const scale = chroma.scale([min, max]).colors(9);

  res.status(200);
  return res.json({ scale });
};
