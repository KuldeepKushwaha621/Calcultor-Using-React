function Calculator(){
  
  
  function handleNumber(){
    alert('handle number click');
  }
  function handleOperator(){
    
  }
  
  
  
  return (
  <div className = "calculator">
      <div className="display">0</div>
      <Calcbutton value="7" onClick={handleNumber} />
      <Calcbutton value="8" onClick={handleNumber} />
      <Calcbutton value="9" onClick={handleNumber} />
      <Calcbutton className="operator" onClick={handleOperator} value="/" />
      
      <Calcbutton value="4" onClick={handleNumber} />
      <Calcbutton value="5" onClick={handleNumber} />
      <Calcbutton value="6" onClick={handleNumber} />
      <Calcbutton className="operator" onClick={handleOperator} value="*"/>
      
      <Calcbutton value="1" onClick={handleNumber} />
      <Calcbutton value="2" onClick={handleNumber} />
      <Calcbutton value="3" onClick={handleNumber} />
      <Calcbutton className="operator" onClick={handleOperator} value="-"/>
      
      <Calcbutton value="C" onClick={handleNumber} />
      <Calcbutton value="0" onClick={handleNumber} />
      <Calcbutton value="=" onClick={handleNumber} />
      <Calcbutton className="operator" onClick={handleOperator} value="+"/>
  </div>
  )
}



function Calcbutton(props){
  return <button className = {props.className} onClick = {props.onClicks}>{props.value}</button>
  
}
ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));
