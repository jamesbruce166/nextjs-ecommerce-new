import Link from 'next/link';

const NotFound = () => {
	return (
		<div className='grid  place-content-center bg-white'>
			<div className='text-center'>
				<strong className='text-9xl font-black text-gray-200'>
					404
				</strong>

				<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					Uh-oh!
				</h1>

				<p className='mt-4 text-gray-500'>
					This product does not exist.
				</p>

				<Link
					href='/products'
					className='mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring'
				>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
