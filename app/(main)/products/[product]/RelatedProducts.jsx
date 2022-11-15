import Link from 'next/link';
import Image from 'next/image';

const getRelatedProducts = async (category) => {
	const res = await fetch(
		`https://dummyjson.com/products/category/${category}?limit=3`
	);
	return res.json();
};

const RelatedProducts = async ({ category }) => {
	const { products } = await getRelatedProducts(category);

	return (
		<div className='mx-4 mt-24'>
			<h2 className=''>Related Products</h2>
			<div className='flex flex-row justify-around'>
				{products.map((product) => (
					<Link
						key={product.id}
						href={`/products/${product.id}`}
						className='group flex flex-col justify-between items-center'
					>
						<div className='h-56 w-56 relative'>
							<Image
								src={product.thumbnail}
								alt={product.name}
								fill={true}
								sizes='(max-width: 768px) 100vw'
								style={{
									objectFit: 'cover',
									borderRadius: '0.3rem',
								}}
							/>
						</div>
						<div>
							<h3 className='mt-4 text-sm text-gray-700'>
								{product.title}
							</h3>
							<p className='mt-1 text-lg font-medium text-gray-900'>
								{`£${product.price}`}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default RelatedProducts;
