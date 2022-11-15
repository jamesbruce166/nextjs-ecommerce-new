import { SkeletonCard } from '$components/cards/SkeletonCard';

export default function Loading() {
	return (
		<div className='space-y-4'>
			<div className='mx-12 grid grid-cols-3 gap-8'>
				{Array.from({ length: 12 }).map((_, idx) => {
					return <SkeletonCard key={idx} isLoading={true} />;
				})}
			</div>
		</div>
	);
}
