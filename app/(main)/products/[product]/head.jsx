async function getProduct(id) {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	return res.json();
}

export default async function Head({ params }) {
	const product = await getProduct(params.product);
	return (
		<>
			<title>{product.title}</title>
		</>
	);
}
