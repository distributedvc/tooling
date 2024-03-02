import type { VercelRequest, VercelResponse } from '@vercel/node';
import cherangi from '@distributed/cherangi';

module.exports = async (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
  const hex = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

  const { name } = cherangi(hex);

  res.status(200);
  return res.json({ hex, name });
};
