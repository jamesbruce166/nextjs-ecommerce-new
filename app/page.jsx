import Link from 'next/link';
import SingleStat from '$components/cards/SingleStat';

export default function Home() {
	return (
		<div className='bg-white py-14 sm:py-20 lg:py-32'>
			<div className='sm:text-center'>
				<h2 className='text-lg font-semibold leading-8 text-indigo-600'>
					Welcome
				</h2>
				<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					The best way to shop online
				</p>
				<p className='mx-auto my-6 max-w-2xl text-lg leading-8 text-gray-600'>
					Lorem ipsum dolor sit amet consect adipisicing elit.
					Possimus magnam voluptatum cupiditate veritatis in accusamus
					quisquam.
				</p>
			</div>
			<div className='flex gap-16 justify-center mt-6'>
				<SingleStat stat='700K+' text='Unique Shoppers' />
				<SingleStat stat='3M+' text='Products Sold' />
			</div>
			<div className='flex justify-center'>
				<Link
					className='bg-indigo-600 text-white rounded-md px-4 py-2 font-bold'
					href='/products'
				>
					Shop Now
				</Link>
			</div>
		</div>
	);
}
