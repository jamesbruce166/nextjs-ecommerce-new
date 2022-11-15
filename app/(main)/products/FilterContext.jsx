'use client';

import React from 'react';

const FilterContext = React.createContext(undefined);

export function FilterProvider({ children }) {
	const [filter, setFilter] = React.useState('');
	const [category, setCategory] = React.useState('');

	return (
		<FilterContext.Provider
			value={{ filter, setFilter, category, setCategory }}
		>
			{children}
		</FilterContext.Provider>
	);
}

export function useFilter() {
	const context = React.useContext(FilterContext);
	if (context === undefined) {
		throw new Error('useFilter must be used within a CounterProvider');
	}
	return context;
}
