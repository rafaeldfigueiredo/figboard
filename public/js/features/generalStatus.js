function statusRun() {
  const statusLabel = document.querySelector("#generalStatusArea");
  try {
    statusLabel.innerText = "Running";
    setTimeout(() => {
      statusLabel.innerText = "Done!";
    }, 3000);
  } catch (error) {
    alert(error);
  }
}

export default function setupStatusRun(){
  const generalStatusButton = document.querySelector('#generalStatusButton')
  generalStatusButton.addEventListener('click',statusRun)
}