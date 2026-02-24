import setupStatusRun from "./features/generalStatus.js";
import setupMakeLogs from "./features/logging.js";
import setupControlPanel from "./features/controlPanel.js";
import setupvendingMachine from "./features/vendingMachine.js";
import setupCreateFile from "./features/createFile.js";
import setupActualLogger from "./features/actualLogger.js";

const state = {
  scanStatus: "Idle",
  backupStatus: "Idle",
  emergencyStatus: "Idle",
  logs :[]
};

export function render(){
  renderControlPanelScan(state)
}

setupStatusRun();
setupMakeLogs();
setupControlPanel(state);
setupvendingMachine();
setupCreateFile();
setupActualLogger();