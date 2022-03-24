import "../styles/App.css";
import Amount from "./Amount";
import ProductCatalog from "./ProductCatalog";
import {useState, useEffect} from 'react';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'export_full.xml')
    xhr.send()
    xhr.onload = function() {
      if (xhr.status !== 200) {
        alert( 'Ошибка: ' + xhr.status)
        return
      }
    }
    xhr.onprogress = (res) => {
      setIsLoaded(true)
      setItems(res)
      console.log(res)
    }
    xhr.onerror = (error)=>{
      setIsLoaded(true)
      setError(error)
    }
  }, [])

  if (error) {
    return <div>Ошибка: {error}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        {/* <Amount data={items} /> */}
        <ProductCatalog />
      </div>
    );
  }
}

export default App;
