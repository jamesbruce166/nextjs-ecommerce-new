import clsx from 'clsx';
import { StarIcon } from '@heroicons/react/24/solid';

const Rating = ({ rating }) => {
	return (
		<div className='flex space-x-1'>
			{Array.from({ length: 5 }).map((_, i) => {
				return (
					<StarIcon
						key={i}
						className={clsx(
							'w-4',
							i < rating ? 'text-yellow-500' : 'text-gray-500'
						)}
					/>
				);
			})}
		</div>
	);
};

export default Rating;
