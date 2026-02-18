const backendDisplay = document.querySelector('#backendDisplay')
const backendButton = document.querySelector('#backendButton')

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


backendButton.addEventListener('click', async ()=>{
  const machine = simpleVending();
  backendButton.disabled = true
  
  for await (const status of machine){
    backendDisplay.innerText = status  
}

  backendButton.disabled = false
})