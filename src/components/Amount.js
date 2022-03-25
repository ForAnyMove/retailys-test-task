function Amount(props) {
    
    function getAmountOfItems(){
        if (props.data === null || props.data.length === 0) {
            return 'Loading...'
        } else {
        let amount = props.data.getElementsByTagName("items")[0]
        .getElementsByTagName("item").length 
        return 'Amount: ' + amount
        }
    }

  return (
      <div className="amount">
        {getAmountOfItems()} 
      </div>
  );
}

export default Amount;
