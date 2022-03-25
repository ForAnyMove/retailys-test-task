function ProductItem(props) {
    return (
      <li>
          <h2>{props.info.name}</h2>
          <img src={props.info.image} alt={props.info.name} className="product-image"></img>
          <h3>Parts:</h3>
          <ul>
            {props.info.parts.map(item => <li>{item}</li>)}
          </ul>
      </li>
    );
  }
  
  export default ProductItem;