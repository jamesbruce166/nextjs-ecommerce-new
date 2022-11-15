import React from 'react';

const ProductLayout = ({ children }) => {
	return (
		<section className='flex items-start justify-between my-6 mx-12 px-6 py-6'>
			{children}
		</section>
	);
};

export default ProductLayout;
