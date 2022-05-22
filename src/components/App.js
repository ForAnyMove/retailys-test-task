import '../styles/App.css';
import Amount from './Amount';
import ProductCatalog from './ProductCatalog';
import { useState, useEffect } from 'react';
import xhrFile from './export_full.xml';
import Pagination from './Pagination';

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(100);

	const lastPageIndex = currentPage * itemsPerPage;
	const firstPageIndex = lastPageIndex - itemsPerPage;
  const currentItem = items.slice(firstPageIndex,lastPageIndex)
  
  const paginate = pageNumber => setCurrentPage(pageNumber)

	useEffect(() => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', xhrFile);
		xhr.send();
		xhr.onload = function () {
			setItems(Array.from(xhr.responseXML.getElementsByTagName('items')[0].getElementsByTagName('item')));
			setIsLoaded(true);
			console.log('xhr onload');
			if (xhr.status !== 200) {
				alert('Ошибка: ' + xhr.status);
			}
		};
		xhr.onerror = (error) => {
			console.log('xhr onerror');
			setIsLoaded(true);
			setError(error);
		};

		return () => {};
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	} else if (!isLoaded) {
		return <div className='loader'></div>;
	} else {
		return (
			<div>
				<Amount data={items} />
				<ProductCatalog
					data={currentItem}
				/>
        <Pagination 
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
			</div>
		);
	}
}

export default App;
