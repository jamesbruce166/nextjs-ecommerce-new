import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }) => (
	<div
		className={clsx('rounded-2xl p-4', {
			'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-800 before:to-transparent':
				isLoading,
		})}
	>
		<div className='flex flex-col items-center space-y-3 w-2/3'>
			<div className='h-20 w-11/12 rounded-lg bg-gray-400' />
			<div className='h-3 w-8/12 rounded-lg bg-gray-400' />
			<div className='h-3 w-1/4 rounded-lg bg-gray-400' />
		</div>
	</div>
);
