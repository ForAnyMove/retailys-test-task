import ProductItem from './ProductItem';
import noPhoto from '../no-photo.jpg';

function ProductCatalog(props) {
	console.log('ProductCatalog');
	function getItems() {
		console.log('getItems');
		const data = props.data;
		return data.slice(0, 150000).map((item, index) => {
			return {
				name: item.attributes.name.nodeValue,
				id: 'item-' + index,
				image: item.attributes.image
					? item.attributes.image.nodeValue
					: noPhoto,
				parts: Array.from(item.children).find((e) => e.localName === 'parts')
					? Array.from(
							Array.from(item.children)
								.find((e) => e.localName === 'parts')
								.getElementsByTagName('item')
					  ).map((item) => item.attributes.name.nodeValue)
					: ['none'],
			};
		});
	}

	const getList = () => {
		const itemsArray = getItems();

		return (
			<ul className='catalog-container'>
				{itemsArray.map((el) => (
					<ProductItem info={el} key={el.id} />
				))}
			</ul>
		);
	};

	try {
		return getList();
	} catch (error) {
		console.error(error);
    return <></>;
	}
}

export default ProductCatalog;
