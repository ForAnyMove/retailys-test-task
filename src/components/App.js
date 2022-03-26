import "../styles/App.css";
import Amount from "./Amount";
import ProductCatalog from "./ProductCatalog";
import { useState, useEffect } from "react";
import xhrFile from "./export_full.xml";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", xhrFile);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status !== 200) {
        alert("Ошибка: " + xhr.status);
      }
    };
    xhr.onprogress = () => {
      setIsLoaded(true);
      setItems(xhr.responseXML);
    };
    xhr.onerror = (error) => {
      setIsLoaded(true);
      setError(error);
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div className="loader"></div>;
  } else {
    return (
      <div>
        <Amount data={items} />
        <ProductCatalog data={items} />
      </div>
    );
  }
}

export default App;
