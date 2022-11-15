import { FilterProvider } from './FilterContext';

const ProductsLayout = ({ children }) => {
	return (
		<section>
			<FilterProvider>{children}</FilterProvider>
		</section>
	);
};

export default ProductsLayout;
