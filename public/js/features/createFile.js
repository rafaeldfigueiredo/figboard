const radioButton = document.querySelector("#radioManButton");

async function createRadioMan() {
  radioButton.disabled = true;
  const res = await fetch("http://127.0.0.1:8080/create_file");
  alert(await res.text());
  radioButton.disabled = false;
}

export default async function setupCreateFile() {
  radioButton.addEventListener("click",createRadioMan);
}
