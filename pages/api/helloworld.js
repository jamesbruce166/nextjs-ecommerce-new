export default async (req, res) => {
	res.status(200).json({ message: 'Hello, World!', input: req.query });
};
