import React from 'react';

const SingleStat = ({ stat, text }) => {
	return (
		<div className='group flex flex-col justify-between rounded-sm bg-white p-8 transition-shadow '>
			<div>
				<h3 className='text-5xl font-bold text-indigo-600 text-center'>
					{stat}
				</h3>
				<div className='mt-4 border-t-2 border-indigo-100 pt-2'>
					<p className='text-sm font-medium uppercase tracking-widest text-gray-500'>
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleStat;
