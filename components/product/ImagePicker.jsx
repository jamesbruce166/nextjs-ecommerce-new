'use client';

import Image from 'next/image';
import { useState } from 'react';

const ImagePicker = ({ thumbnail, images }) => {
	const [mainImage, setMainImage] = useState(thumbnail);

	return (
		<div className='space-y-2'>
			<Image
				src={mainImage}
				className='rounded-lg'
				alt='Thumbnail'
				style={{ objectFit: 'cover' }}
				width={500}
				height={500}
			/>

			<div className='flex space-x-2'>
				{images.map((image, idx) => {
					return (
						<button
							key={idx}
							className='w-1/3'
							onClick={() => setMainImage(image)}
						>
							<Image
								src={image}
								className='rounded-md'
								alt='product image'
								height={80}
								width={80}
							/>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default ImagePicker;
