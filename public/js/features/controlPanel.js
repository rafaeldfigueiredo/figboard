function getRandomStatus() {
  const statuses = ["Okay", "Not Good", "Bad", "CATASTROPHE"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function startScan(state) {
  //this is to start stuff
  state.scanStatus = getRandomStatus();
}

function getBackup(state) {
  state.backupStatus = getRandomStatus();
}

function emergencyToggle(state) {
  state.emergencyStatus = getRandomStatus();
}

function renderControlPanel(state) {
  //this function renders
  document.querySelector("#scanStatusArea").innerText = state.scanStatus;
  document.querySelector("#backupStatusArea").innerText = state.backupStatus;

  const emergencyStatusArea = document.querySelector("#emergencyStatusArea");
  document.querySelector("#emergencyStatusArea").innerText =
    state.emergencyStatus;
  emergencyStatusArea.classList.toggle(
    "catastrophe",
    state.emergencyStatus === "CATASTROPHE",
  );
}

function wireControlPanel(state) {
  //this function wires stuff to their buttons
  document.querySelector("#startScanButton").addEventListener("click", () => {
    startScan(state);
    renderControlPanel(state);
  });
  document
    .querySelector("#getBackupButton")
    .addEventListener("click", () => {
      getBackup(state);
      renderControlPanel(state);
    });
  document.querySelector("#emergencyButton").addEventListener("click", () => {
    emergencyToggle(state);
    renderControlPanel(state);
  });
}

export default function setupControlPanel(state) {
  renderControlPanel(state)
  wireControlPanel(state)
}
