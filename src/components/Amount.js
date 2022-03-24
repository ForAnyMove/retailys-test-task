function Amount(props) {
    
    function getAmountOfItems(){
        let amount = props.data.getElementsByTagName("items")[0]
        .getElementsByTagName("item").length 
        console.log(amount)
        return amount
    }

  return (
      <div>
        {getAmountOfItems()} 
      </div>
  );
}

export default Amount;
