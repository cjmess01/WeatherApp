async function generateTemp(){
    let temperature = await pullData();
    console.log('Data is: ' + temperature);

    const originalElement = document.getElementById('curr');
    originalElement.innerHTML = temperature;
    
}

async function pullData(){

  const response = await fetch('/getTemp');
  const data = await response.json();
  //console.log("Here" + data);
  return data.current.temperature;

}