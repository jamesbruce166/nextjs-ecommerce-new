import ProductCard from '$components/product/ProductCard';

const getProducts = async () => {
	// artificial delay
	//await new Promise((resolve) => setTimeout(resolve, 3000));

	const url = `https://dummyjson.com/products?select=title,price,thumbnail`;
	const res = await fetch(url);
	return res.json();
};

export default async function Products() {
	const { products } = await getProducts();

	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='relative mx-auto max-w-3xl text-center'>
					<span className='absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10'></span>

					<h2 className='relative inline-block bg-white px-4 text-center text-2xl font-bold'>
						Viewing All Products
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-y-10 mt-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
