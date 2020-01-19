import cherangi from 'cherangi';

module.exports = async (req, res): Promise<void> => {
  const hex = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

  const { name } = cherangi(hex);

  res.status(200);
  res.json({ hex, name });
};
