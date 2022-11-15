import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
	return (
		<Link
			href={`/products/${product.id}`}
			className='group flex flex-col justify-between'
		>
			<div className='flex items-center justify-center'>
				<div className='h-64 w-64 relative'>
					<Image
						src={product.thumbnail}
						alt={product.title}
						fill={true}
						sizes='(max-width: 768px) 100vw'
						style={{
							objectFit: 'cover',
							borderRadius: '0.4rem',
						}}
					/>
				</div>
			</div>
			<div className='flex flex-row justify-center'>
				<div className='flex flex-col justify-start'>
					<h3 className='mt-4 text-sm text-gray-700'>
						{product.title}
					</h3>
					<p className='mt-1 text-lg font-medium text-gray-900'>
						{`£${product.price}`}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
