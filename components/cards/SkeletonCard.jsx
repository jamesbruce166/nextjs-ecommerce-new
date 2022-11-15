import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }) => (
	<div
		className={clsx('rounded-2xl', {
			'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
				isLoading,
		})}
	>
		<div className='mt-4 space-y-3'>
			<div className='h-14 rounded-lg bg-gray-200' />
			<div className='h-3 w-11/12 rounded-lg bg-gray-200' />
			<div className='h-3 w-8/12 rounded-lg bg-gray-200' />
		</div>
	</div>
);
