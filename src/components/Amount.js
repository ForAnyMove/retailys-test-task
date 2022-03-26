function Amount(props) {
  function getAmountOfItems() {
    if (props.data === null || props.data.length === 0) {
      return (<div className="loader"></div>);
    } else {
      let amount = props.data
        .getElementsByTagName("items")[0]
        .getElementsByTagName("item").length;
      return (<div className="amount">Amount: {amount}</div>)
    }
  }

  return getAmountOfItems()
}

export default Amount;
