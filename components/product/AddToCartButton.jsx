'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const AddToCartButton = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const addToCart = () => {
		// update the cart count cookie
		document.cookie = `_cart_count=${
			initialCartCount + 1
		}; path=/; max-age=${60 * 60 * 24 * 30}};`;

		// Use a transition and isPending to create inline loading UI
		startTransition(() => {
			// Refresh the current route and fetch new data from the server without
			// losing client-side browser or React state.
			router.refresh();
		});
	};

	return (
		<button
			className='relative w-full items-center space-x-2 rounded-lg bg-[#6466f1] px-3 py-1  text-sm font-medium text-white hover:bg-[#5d60e5] disabled:text-white/70'
			onClick={addToCart}
			disabled={isPending}
		>
			Add to Cart
			{isPending ? (
				<div className='absolute right-2 top-1.5' role='status'>
					<div
						className='
          h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent'
					/>
					<span className='sr-only'>Loading...</span>
				</div>
			) : null}
		</button>
	);
};

export default AddToCartButton;
