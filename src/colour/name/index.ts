import cherangi from '@distributed/cherangi';

module.exports = async (req, res): Promise<void> => {
  const { colour } = req.query;

  if (!colour) {
    res.status(400);
    res.send('Bad Request');
  }

  const match = cherangi(`#${colour}`);

  res.status(match.status === -1 ? 404 : 200);

  return res.json(match);
};
