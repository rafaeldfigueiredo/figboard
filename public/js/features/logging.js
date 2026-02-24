let logNumber = 0;
const loggingButton = document.querySelector("#loggingButton")
const logArea = document.querySelector("#logsArea");

function makeLogs() {
  const logOneElement = document.createElement("p");
  logNumber += 1;
  const logOne = document.createTextNode(`Log ${logNumber}`);
  logOneElement.appendChild(logOne);
  logArea.appendChild(logOneElement);

  if (logNumber <= 4) {
    setTimeout(makeLogs, 5000);
  }
}

export default function setupMakeLogs(){
  loggingButton.addEventListener('click',makeLogs)
}