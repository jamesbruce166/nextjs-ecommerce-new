import { Suspense } from 'react';

import ImagePicker from '$components/product/ImagePicker';
import ProductPrice from '$components/product/ProductPrice';
import Rating from '$components/product/Rating';

const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

const fetchProduct = async (id) => {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	return res.json();
};

function PricingSkeleton() {
	return (
		<div
			className={`h-[161px] space-y-4 rounded-lg bg-gray-800 ${shimmer}`}
		></div>
	);
}

const ProductPage = async ({ params }) => {
	const product = await fetchProduct(params.product);
	const {
		title,
		description,
		price,
		discountPercentage,
		rating,
		thumbnail,
		images,
		category,
	} = product;

	return (
		<>
			<div className='grid grid-cols-12 gap-6'>
				<div className='col-span-5'>
					<ImagePicker thumbnail={thumbnail} images={images} />
				</div>

				<div className='col-span-4 space-y-4'>
					<div className='truncate text-2xl font-medium text-black'>
						{title}
					</div>

					<div>
						<Rating rating={rating} />
					</div>

					<div className='space-y-4 text-sm text-gray-800'>
						<p>{description}</p>
					</div>
				</div>

				<div className='col-span-3'>
					<Suspense fallback={<PricingSkeleton />}>
						<ProductPrice
							price={price}
							discountPercentage={discountPercentage}
						/>
					</Suspense>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
