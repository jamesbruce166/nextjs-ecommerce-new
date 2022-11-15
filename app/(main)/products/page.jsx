import ProductCard from '$components/product/ProductCard';
import CategoryFilter from '$components/product/CategoryFilter';

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

				{/* <ol className='flex justify-center gap-1 text-xs font-medium'>
					<li>
						<a
							href='#'
							className='inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100'
						>
							<span className='sr-only'>Prev Page</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-3 w-3'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block h-8 w-8 rounded border border-gray-100 text-center leading-8'
						>
							1
						</a>
					</li>
					<li className='block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white'>
						2
					</li>
					<li>
						<a
							href='#'
							className='block h-8 w-8 rounded border border-gray-100 text-center leading-8'
						>
							3
						</a>
					</li>
					<li>
						<a
							href='#'
							className='block h-8 w-8 rounded border border-gray-100 text-center leading-8'
						>
							4
						</a>
					</li>
					<li>
						<a
							href='#'
							className='inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100'
						>
							<span className='sr-only'>Next Page</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-3 w-3'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</li>
				</ol> */}
			</div>
		</div>
	);
}
