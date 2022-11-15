import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import ReviewSection from '$components/product/ReviewSection';
import ImagePicker from '$components/product/ImagePicker';
import ProductPrice from '$components/product/ProductPrice';
import Rating from '$components/product/Rating';
import { SkeletonCard } from '$components/cards/SkeletonCard';

const fetchProduct = async (id) => {
	const res = await fetch(`https://dummyjson.com/products/${id}`);
	return res.json();
};

const LoadingReviews = () => {
	return (
		<div className='grid grid-cols-2 gap-6 px-8'>
			<div className='col-span-1'>
				<SkeletonCard />
			</div>
			<div className='col-span-1'>
				<SkeletonCard />
			</div>
			<div className='col-span-1'>
				<SkeletonCard />
			</div>
			<div className='col-span-1'>
				<SkeletonCard />
			</div>
		</div>
	);
};

const ProductPage = async ({ params }) => {
	const product = await fetchProduct(params.product);
	if (!product?.id) return notFound();

	const {
		title,
		description,
		price,
		discountPercentage,
		rating,
		thumbnail,
		images,
	} = { ...product };

	return (
		<div className='flex flex-col gap-6'>
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
					<ProductPrice
						price={price}
						discountPercentage={discountPercentage}
					/>
				</div>
			</div>

			<h2 className='mt-16 text-xl font-bold sm:text-2xl text-center'>
				Customer Reviews
			</h2>

			<Suspense fallback={<LoadingReviews />}>
				<ReviewSection />
			</Suspense>
		</div>
	);
};

export default ProductPage;
