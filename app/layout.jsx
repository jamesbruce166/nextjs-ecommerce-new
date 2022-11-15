import '../styles/globals.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body className='flex flex-col bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
				<Navbar />
				<div className='min-h-[calc(60vh)]'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
