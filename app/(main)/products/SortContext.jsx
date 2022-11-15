'use client';

import React from 'react';

const SortContext = React.createContext(undefined);

const options = [
	{ name: 'Best Rating', href: '#', current: false },
	{ name: 'Price: Low to High', href: '#', current: false },
	{ name: 'Price: High to Low', href: '#', current: false },
];

export function SortProvider({ children }) {
	const [sortOption, setSortOption] = React.useState({});
	return (
		<SortContext.Provider value={{ sortOption, setSortOption, options }}>
			{children}
		</SortContext.Provider>
	);
}

export function useSort() {
	const context = React.useContext(SortContext);
	if (context === undefined) {
		throw new Error('useSort must be used within a SortProvider');
	}
	return context;
}
