const vendingMachineDisplay = document.querySelector('#vendingMachineDisplay')
const vendingMachineButton = document.querySelector('#vendingMachineButton')

async function* simpleVending() {  
  const delay = () => new Promise((res)=>{setTimeout(res,2000)})

  yield 'Selecting Your Snack'
  await delay()
  yield 'Rolling out'
  await delay()
  yield 'Almost there...'
  await delay()
  yield 'Done! Enjoy!'
  return 0
}

async function vendingMachineStart(){   
  const machine = simpleVending();
  vendingMachineButton.disabled = true
  
  for await (const status of machine){
    vendingMachineDisplay.innerText = status
  }

  vendingMachineButton.disabled = false
}

export default function setupvendingMachine(){
  vendingMachineButton.addEventListener('click',vendingMachineStart)
}