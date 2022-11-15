import AddToCartButton from './AddToCartButton';

const ProductPrice = ({ price, discountPercentage }) => {
	const getOldPrice = () => {
		return Number(price * (discountPercentage / 100 + 1)).toFixed();
	};

	return (
		<div className='relative block overflow-hidden rounded-lg border border-gray-100 p-8 shadow-lg'>
			<span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600'></span>
			<div className='flex'>
				<div className='rounded bg-[#c42e4a] px-1 text-xs text-pink-100'>
					Expires soon!
				</div>
			</div>

			<div className='flex space-x-1.5 flex-col gap-2'>
				<div className='text-lg font-bold leading-snug text-red-800'>
					{`-${discountPercentage}%`}
				</div>
				<div className='flex justify-center'>
					<div className='flex gap-4 items-center'>
						<div className='text-3xl font-bold leading-snug text-black'>
							{`£${price}`}
						</div>
						<div className='text-sm leading-snug text-gray-600 line-through'>
							£{getOldPrice()}
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-2 mt-4'>
				<AddToCartButton />
			</div>
		</div>
	);
};

export default ProductPrice;
