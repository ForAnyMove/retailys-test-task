import ProductItem from "./ProductItem";
import noPhoto from "../no-photo.jpg";

function ProductCatalog(props) {

  let i = 0;
  function getItems() {
    const data = Array.from(
      props.data.getElementsByTagName("items")[0].getElementsByTagName("item")
    );
    return data.map((item) => {
      i++;
      return {
        name: item.attributes.name.nodeValue,
        id: "item-" + i,
        image: item.attributes.image
          ? item.attributes.image.nodeValue
          : noPhoto,
        parts: Array.from(item.children).find((e) => e.localName === "parts")
          ? Array.from(
              Array.from(item.children)
                .find((e) => e.localName === "parts")
                .getElementsByTagName("item")
            ).map((item) => item.attributes.name.nodeValue)
          : ["none"],
      };
    });
  }

  const getList = () => {
    if (props.data === null || props.data.length === 0) {
      return ''
    } else {
      const itemsArray = getItems();

      return (
        <ul className="catalog-container">
          {itemsArray.map((el) => (
            <ProductItem info={el} key={el.id} />
          ))}
        </ul>
      );
    }
  };
  try {
    return getList();
  } catch (error) {
    console.error(error);
  }
}

export default ProductCatalog;
