const radioButton = document.querySelector("#radioManButton");

if (!radioButton) {
    alert("Error! radioManButton not found")
    console.log(("Error! radioManButton not found"))
} else {
  radioButton.addEventListener("click", async () => {
    radioButton.disabled = true;
    const res = await fetch("http://127.0.0.1:8080/create_file");
    alert(await res.text());
    radioButton.disabled = false;
  });
}
