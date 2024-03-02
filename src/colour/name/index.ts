import type { VercelRequest, VercelResponse } from '@vercel/node';
import cherangi from '@distributed/cherangi';

module.exports = async (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
  const { colour } = req.query;

  if (!colour) {
    res.status(400);
    res.send('Bad Request');
  }

  const match = cherangi(`#${colour}`);

  res.status(match.status === -1 ? 404 : 200);

  return res.json(match);
};
