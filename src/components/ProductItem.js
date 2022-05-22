function ProductItem(props) {
  return (
    <li className="product">
      <h3>{props.info.name}</h3>
      <img
        src={props.info.image}
        alt={props.info.name}
        className="product-image"
      ></img>
      <h4>Parts:</h4>
      <ul>
        {props.info.parts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default ProductItem;
