import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function RootLayout({ children }) {
	return (
		<body className='flex flex-col bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
			<Analytics />
			<Navbar />
			<div className='min-h-[calc(60vh)]'>{children}</div>
			<Footer />
		</body>
	);
}
